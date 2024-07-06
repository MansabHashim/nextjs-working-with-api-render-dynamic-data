"use client"
import React from 'react'
import { MyContext } from '../Context/Context'
import { useContext } from 'react'



const Nav = () => {
    const user = useContext(MyContext)
    console.log(user);
  return (
    <div className=" bg-blue-400 p-2 my-3 text-black rounded">This is {user}</div>
  )
}

export default Nav