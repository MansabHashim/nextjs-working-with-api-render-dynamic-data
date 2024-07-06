"use client"
import React from 'react'
import { createContext } from 'react'
export const MyContext = createContext()

const Context = ({children}) => {
    const username = "Mansab"
  return (
    <div>
        <MyContext.Provider value={username}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context