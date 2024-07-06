"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Header } from "./Components/Header";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const page = () => {
  const [allUsers, setallUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    const data = res.data;
    setallUsers(data);
  };


  const notify = () => {
    // toast("API called successfully 🎉🎉!")

    toast.success('API called successfully 🎉🎉', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  
  };



  useEffect(()=>{
    getUsers()
    notify()
  }, [])


  return (
    <div>
     <Header/>
      
      <button className=" bg-purple-600 px-4 py-2 rounded-lg" onClick={()=>{getUsers(); notify()}}>  Get Data</button>
      
      <button className=" bg-orange-600 px-4 py-2 rounded-lg" onClick={notify}>  Get Toast</button>
      <ToastContainer />

      <div className=" bg-blue-400 p-5 my-3 rounded ">
        <ul>
          {allUsers.map((users) => {
            return <div className="flex text-start">
              <li>
                {users.username} ----
                </li>

                <div src={`/${users.id}`} className=" flex w-4/12 justify-between">
            <a href={`/${users.id}`}>--- {users.name}----
            </a>
            <p className="w-64">{users.id}</p>
                </div>
             </div>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default page;
