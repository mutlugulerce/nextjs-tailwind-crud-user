import React, { useState } from "react";
import { deleteUser, updateUser } from "../features/userSlice";
import { useDispatch } from "react-redux";


const Users = ({ name, email, id }) => {
const dispatch= useDispatch();
const [isModalOpen,setIsOpenModal] = useState(false);
const [isEditing,setIsEditing] =useState(false);

const handleOpenView = () => {
  setIsOpenModal(true)
}

const handleCloseView = () => {
  setIsOpenModal(false)
}


const handleDelete = () => {
dispatch(deleteUser(id))
}

const handleIsEditing = () => {
  setIsEditing(true)
}

const handleOnEditSubmit = (e) => {
  e.preventDefault();
  const nameValue = e.target.name.value;
  const emailValue = e.target.email.value;

  dispatch(updateUser({id, name: nameValue, email:emailValue}));
  setIsEditing(false);
} 

  return (

    <div>
    {isEditing ? (

     <form  onSubmit={handleOnEditSubmit}>
      <input
      placeholder="Name"
      name="name"
      defaultValue={name}
      />

      <input  placeholder="email" name="email" defaultValue={email} />

      <button  onSubmit={handleOnEditSubmit}>Edit</button>
     </form>

    ) : (

    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>

      <div>
        <button onClick={handleOpenView}>View</button>
        <button onClick={handleIsEditing}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div> )}

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
