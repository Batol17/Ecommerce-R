import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import axiosIns from '../../axios/axios';
function updateUser() {
  const route=useRoutes

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('');
  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('');
  // const [passwordConfirm, setpasswordConfirm] = useState('');
  // const [role, setRole] = useState('')
  // const [image, setimage] = useState('')

  const URL = `/api/users/updateuser/${(route.params.id)}`
  console.log(route.params.id)

//  useEffect(() =>{
//     const updateuser = async (e) => {
//         // console.log(firstname, lastname, password, passwordConfirm, email);
//         e.preventDefault();
//         console.log("update");                        
//         try {
//           const res = await axiosIns.get(`${URL}`, 
//             { headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` } }
//           )
//           console.log(res, "res");
//           console.log(form, "form");
//         } catch (er) {
//           console.log(er, "eror");
//         }
//       }
//       updateuser();}
//       ,[])
  return (
    <>
    <div>
      hhh
    </div>
      
    </>
  )
}

export default updateUser





