import React from 'react'
import { Input } from 'antd'

import styles from './filter.module.css'
import 'antd/dist/antd.css'

interface IFilter {
  inputValue: string
  handleInput: React.ChangeEventHandler<HTMLInputElement>
}

const Filter: React.FC<IFilter> = ({ inputValue, handleInput }) => {
  return (
    <Input
      className={styles.filter}
      type="text"
      value={inputValue}
      onChange={handleInput}
      placeholder={'Search...'}
      autoFocus
    />
  )
}

export default Filter
