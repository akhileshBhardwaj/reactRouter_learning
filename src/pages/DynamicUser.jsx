import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const DynamicUser = () => {
  const { slug } = useParams();

  const location=useLocation();
  const navigate=useNavigate();

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

  const specificUser = user.find((data) => data.id == slug);
  console.log(specificUser);

  return (
    <div className="pt-10">
     <div className="flex items-center justify-center gap-x-5 ">
         <h1>ID: {specificUser.id} </h1>
         <h1>Name: {specificUser.name} </h1>
         <h1>Gmail: {specificUser.gmail} </h1>
         <h1>Age: {specificUser.age} </h1>

         {location.pathname== '/user/3' && (
            <div>
                <h1>Welcome,{specificUser.name} </h1>
            </div>
         ) }

     </div>

         <button onClick={()=> navigate('/')} className="px-4 py-2 border">Goto Home</button>

    </div>
  );
};

export default DynamicUser;
