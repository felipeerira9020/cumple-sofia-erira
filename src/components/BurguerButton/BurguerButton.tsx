import React from 'react'
import { BurguerBut } from './burguerButton.styled'

const BurguerButton = () => {
  return (
    <BurguerBut>
    <div className="menu-icon">
    <input type="checkbox" id="tmenu"/>
    <label htmlFor="tmenu"></label>
  </div>
    </BurguerBut>
  )
}

export default BurguerButton
