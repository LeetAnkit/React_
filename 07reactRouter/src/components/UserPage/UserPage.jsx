// File: ./components/User/User.jsx

import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userid } = useParams() 
  return(
    <div className='bg-green-600 text-white text-3x'>User ID: {userid}</div>
  ) 
};

export default UserPage;
