"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(createUser({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
      </div>

      <button onClick={handleAddUser}>Add</button>
    </div>
  );
};

export default AddUser;
