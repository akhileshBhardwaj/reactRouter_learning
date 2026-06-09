import React from "react";
import { data, Link } from "react-router-dom";

const User = () => {
  const user = [
    {
      id: 1,
      name: "akhilesh",
      gmail: "akhil@gmail.com",
      age: 20,
    },
    {
      id: 2,
      name: "mithlesh",
      gmail: "mith@gmail.com",
      age: 15,
    },
    {
      id: 3,
      name: "ayush",
      gmail: "ayush@gmail.com",
      age: 25,
    },
    {
      id: 4,
      name: "raunak",
      gmail: "raunak@gmail.com",
      age: 5,
    },
  ];

  return (
    <div>
      {user.map((item, index) => (
        <div key={item.id}>
          <Link to={`/user/${item.id}`}>
            <h1> UserName {item.name} </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default User;
