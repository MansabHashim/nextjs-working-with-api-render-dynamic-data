"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = ({ params }) => {
  const [allUsers, setAllUsers] = useState({});

  const getUsers = async () => {
    try {
      const { id } = params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log(res.data);
      setAllUsers(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [params]);

  return (
    <div className="bg-center items-center flex flex-col gap-5">
      <p className="text-white">This is page no: {allUsers.id}</p>

      <div className="gap-5 flex-col flex w-8/12 bg-green-300 p-5 rounded-lg">
        <img
          className="w-32 rounded-full bg-center self-center items-center"
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          alt="person"
        />
        <div className="flex items-center gap-5 p-2">
          <h2>Username:</h2>
          <p>{allUsers.username}</p>
        </div>
        <div className="flex items-center gap-5 p-2">
          <h2>Name:</h2>
          <p>{allUsers.name}</p>
        </div>
        <div className="flex items-center gap-5 p-2">
          <h2>Email:</h2>
          <p>{allUsers.email}</p>
        </div>
        <div className="flex items-center gap-5 p-2">
          <h2>Address:</h2>
        </div>
        {allUsers.address && (
          <div>
            <div className="flex items-center gap-5 p-2">
              <h3>Street:</h3>
              <p>{allUsers.address.street}</p>
            </div>
            <div className="flex items-center gap-5 p-2">
              <h3>Suite:</h3>
              <p>{allUsers.address.suite}</p>
            </div>
            <div className="flex items-center gap-5 p-2">
              <h3>City:</h3>
              <p>{allUsers.address.city}</p>
            </div>
            <div className="flex items-center gap-5 p-2">
              <h3>Zipcode:</h3>
              <p>{allUsers.address.zipcode}</p>
            </div>
            <div className="flex items-center gap-5 p-2">
              <h3>Geo:</h3>
              <p>Lat: {allUsers.address.geo.lat}, Lng: {allUsers.address.geo.lng}</p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-5 p-2">
          <h2>Phone:</h2>
          <p>{allUsers.phone}</p>
        </div>
        <div className="flex items-center gap-5 p-2">
          <h2>Website:</h2>
          <p>{allUsers.website}</p>
        </div>
        <div className="flex items-center gap-5 p-2">
          <h2>Company:</h2>
        </div>
        {allUsers.company && (
          <div>
            <div className="flex items-center gap-5 p-2">
              <h3>Name:</h3>
              <p>{allUsers.company.name}</p>
            </div>
            <div className="flex items-center gap-5 p-2">
              <h3>Catchphrase:</h3>
              <p>{allUsers.company.catchPhrase}</p>
            </div>
            <div className="flex items-center gap-5 p-2">
              <h3>Business:</h3>
              <p>{allUsers.company.bs}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
