import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_COUNTRIES } from '../../query/countries'
import Filter from '../Filter'
import Table from '../Table'

import './../../styles/index.css'

interface IContinent {
  code: string
  name: string
}

export interface ICountry {
  code: string
  name: string
  continent: IContinent
}

const App: React.FC = () => {
  const { data, loading } = useQuery(GET_COUNTRIES)
  const [inputValue, setInputValue] = useState<string>('')
  const [countries, setCountries] = useState<Array<ICountry>>([])
  const [clonedCountries, setClonedCountries] = useState<Array<ICountry>>([])

  useEffect(() => {
    if (!loading) {
      setCountries(data.countries)
      setClonedCountries(data.countries)
    }
  }, [data, loading])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    handleFilter(event)
  }

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(event.target.value.toLowerCase())
    const filtered = clonedCountries.filter((country: ICountry) => {
      const { name, code, continent } = country
      return (
        name.toLowerCase().match(regex) ||
        code.toLowerCase().match(regex) ||
        continent.name.toLowerCase().match(regex) ||
        continent.code.toLowerCase().match(regex)
      )
    })
    setCountries(filtered)
  }

  return (
    <div className="container">
      <Filter inputValue={inputValue} handleInput={handleInput} />
      <Table
        countries={countries}
        setCountries={setCountries}
        data={data}
        loading={loading}
      />
    </div>
  )
}

export default App
