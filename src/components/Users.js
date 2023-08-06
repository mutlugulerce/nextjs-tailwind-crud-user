import React from "react";

const Users = ({ name, email, id }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>

      <div>
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Users;
