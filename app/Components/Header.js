"use client"
import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../Context/Context'
import Nav from './Nav'

export const Header = () => {
    const user = useContext(MyContext)
  return (
    <div className=" bg-green-400 p-5 text-black rounded">
        <div >This is Header and name is {user}</div>
        <Nav/>
    </div>
  )
}
