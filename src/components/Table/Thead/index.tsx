import { THEAD } from './../../../data/thead'

import styles from './thead.module.css'

interface IThead {
  countries: Array<ICountry>
  setCountries: any
}

interface IContinent {
  code: string
  name: string
}

export interface ICountry {
  code: string
  name: string
  continent: IContinent
}

const Thead: React.FC<IThead> = ({ countries, setCountries }) => {
  const handleSort = (field: any) => {
    const copied = countries.concat()
    const filtered = copied.sort((a: any, b: any) => {
      if (field.length === 1) return a[field] > b[field] ? 1 : -1
      return a[field[0]][field[1]] > b[field[0]][field[1]] ? 1 : -1
    })
    setCountries(filtered)
  }

  return (
    <thead>
      <tr>
        {THEAD.map((elem) => {
          const { text, field, id } = elem
          return (
            <td
              className={styles.excel}
              onClick={() => handleSort(field)}
              key={id}
              title="sort"
            >
              {text}
            </td>
          )
        })}
      </tr>
    </thead>
  )
}

export default Thead
