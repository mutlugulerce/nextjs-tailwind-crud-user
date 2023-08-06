import React from "react";
import { deleteUser } from "../features/userSlice";
import { useDispatch } from "react-redux";


const Users = ({ name, email, id }) => {
const dispatch= useDispatch();


const handleDelete = () => {
dispatch(deleteUser(id))
}
  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>

      <div>
        <button>View</button>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Users;
