import React from 'react'
import Thead from './Thead'
import Loader from '../Loader'

import styles from './table.module.css'

import { ICountry } from '../App'

interface ITable {
  countries: Array<ICountry>
  setCountries: any
  data: any
  loading: boolean
}

const Table: React.FC<ITable> = ({ countries, setCountries, loading }) => {
  if (loading) {
    return <Loader />
  }

  return (
    <>
      {countries.length ? (
        <table className={styles.table}>
          <Thead countries={countries} setCountries={setCountries} />
          <tbody>
            {countries.map((country: ICountry) => {
              const { name, code, continent } = country
              return (
                <tr key={code}>
                  <td className={styles.excel}>
                    <img
                      src={`https://www.countryflags.io/${code.toLowerCase()}/flat/64.png`}
                      alt={`${name} flag`}
                    />
                  </td>
                  <td className={styles.excel}>{name}</td>
                  <td className={styles.excel}>{code}</td>
                  <td className={styles.excel}>{continent.name}</td>
                  <td className={styles.excel}>{continent.code}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h2 className={styles.title}>No matches</h2>
      )}
    </>
  )
}

export default Table
