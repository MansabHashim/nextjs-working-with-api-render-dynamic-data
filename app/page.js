"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const page = () => {
  const [allUsers, setallUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    const data = res.data;
    setallUsers(data);
  };


  useEffect(()=>{
    getUsers()
  }, [])


  return (
    <div>
      <button
        className=" bg-purple-600 px-4 py-2 rounded-lg"
        onClick={getUsers}
      >
        Get Data
      </button>
      <div className=" bg-blue-400 p-5 my-3 rounded">
        <ul>
          {allUsers.map((users) => {
            return <li className="text-start">{users.username} ----
            <a href={`/${users.id}`}>--- {users.name}----{users.id}</a>
             </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default page;
