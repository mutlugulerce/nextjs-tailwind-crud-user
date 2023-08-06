import React, { useState } from "react";
import { deleteUser } from "../features/userSlice";
import { useDispatch } from "react-redux";


const Users = ({ name, email, id }) => {
const dispatch= useDispatch();
const [isModalOpen,setIsOpenModal] = useState(false);

const handleOpenView = () => {
  setIsOpenModal(true)
}

const handleCloseView = () => {
  setIsOpenModal(false)
}


const handleDelete = () => {
dispatch(deleteUser(id))
}
  return (

    <div>
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>

      <div>
        <button onClick={handleOpenView}>View</button>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>

    {isModalOpen && (

      <div>
  <div>
    <h2>User Details</h2>
    <div>ID: {id}</div>
    <div>Name: {name}</div>
    <div>Email: {email}</div>

    <button onClick={handleCloseView}>Close</button>
  </div>

      </div>
    )}



    </div>
    
  );
};

export default Users;
