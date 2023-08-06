'use client'

import React, { useEffect } from "react"
import AddUser from "../components/AddUser";
import Users from "../components/Users";
import { fetchUser } from "../features/userSlice";
import { useDispatch,useSelector } from "react-redux";

export default function Home() {
const dispatch= useDispatch();
const {users} = useSelector((state) => state.users)


useEffect(() => {
dispatch(fetchUser());

},[dispatch]);
console.log(users)


  return (
    <div>
    <div>
      <h2>Create New User</h2>
      <AddUser/>
    </div>

    {users.map((user) => {

const {id,name,email} =user
return(
  
  <Users
  key={id}
  id={id}
  name={name}
  email={email}
  />
)

    })}
    </div>
  )
}
