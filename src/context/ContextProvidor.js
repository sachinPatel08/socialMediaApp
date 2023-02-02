import React, { Children, useState } from 'react'
import globalData from './CreateContext'
const ContextProvidor = ({children}) => {
   
  const token = JSON.parse(localStorage.getItem('token'))
 
  return (
    <>
      <globalData.Provider value={token}>
      {children}
      </globalData.Provider>
    </>
  )
}

export default ContextProvidor
