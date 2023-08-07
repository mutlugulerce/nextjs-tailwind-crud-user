import React, { useState } from "react";
import { deleteUser, updateUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import Button from "./Button";

const Users = ({ name, email, id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenView = () => {
    setIsOpenModal(true);
  };

  const handleCloseView = () => {
    setIsOpenModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  const handleIsEditing = () => {
    setIsEditing(true);
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.name.value;
    const emailValue = e.target.email.value;

    dispatch(updateUser({ id, name: nameValue, email: emailValue }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form
          onSubmit={handleOnEditSubmit}
          className="w-full my-2 flex justify-around border-y-2 border-green-400"
        >
          <input placeholder="Name" name="name" defaultValue={name} />

          <input placeholder="email" name="email" defaultValue={email} />

          <button
            className="bg-green-700 text-white "
            onSubmit={handleOnEditSubmit}
          >
            Edit
          </button>
        </form>
      ) : (
        <div className="w-full border-y-2 flex items-start justify-between px-4 space-y-1">
          <h2 className="capitalize">{name}</h2>
          <h2>{email}</h2>

          <div className="space-x-2">
            <Button
              title="View"
              handleClick={handleView}
              styleContainer={"bg-black text-white px-4 py-2 "}
            />
            <Button
              title="Edit"
              handleClick={handleEdit}
              styleContainer={"bg-blue-600 text-white px-4 py-2 "}
            />
            <Button
              title="Delete"
              handleClick={handleDelete}
              styleContainer={"bg-red-600 text-white px-4 py-2 "}
            />
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>

            <button
              className="bg-red-600 text-white px-4 py-2 mt-4"
              onClick={handleCloseView}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
