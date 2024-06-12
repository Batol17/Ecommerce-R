
import React, { useEffect, useState } from 'react'
import axiosIns from '../../axios/axios';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoMdPersonAdd } from "react-icons/io";
import { BiShow } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
function Users() {
  const [usersData, setUsersData] = useState([])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const token = localStorage.getItem('token')
  const getusers = async () => {
    try {
      const response = await axiosIns.get('api/users?page=1&limit=10', {
        headers: { Authorization: `Bearer ${token} ` }
      })
      setUsersData(response.data.data)
    } catch (e) {
      // setError(()=>e.response.data.messagr)
      console.log(e, 'error');
    }
  }
  useEffect(() => {
    getusers();
  }, [])
  console.log(usersData)

  const users = usersData.length > 0 && usersData.map(function(user,index) {

return(
  <tr key={index}>
  <td >{user.firstname +' '+ user.lastname}</td>
  <td>{user.email}</td>
  <td>{user.role}</td>
  <td style={{borderRadius: 50}}><img src={user.image} width={50} alt="img"   /></td>
  <td>
    <button style={{ border: 'none', borderRadius: 50 }} >

      <Link to='updateuser' className="nav-link">
        <span className="ms-1 d-none d-sm-inline text-success"><RxUpdate /></span>
      </Link>
    </button>
    {/* <button  style={{ border: 'none', borderRadius: 50 }} >

        <Link to='showuser' className="nav-link ">   
          <span className="ms-1 d-none d-sm-inline text-warning "><BiShow /></span>
        </Link>
      </button> */}
    <button style={{ border: 'none', borderRadius: 50 }} type='button' data-target="#exampleModal" data-toggle="modal">
      <span className="ms-1 d-none d-sm-inline text-danger" ><AiOutlineDelete /></span>
    </button>
  </td>
</tr>
)
  })
  return (

    <>
      <section className='container' >
        <div className='p-4'>
          <div className='ps-4 pt-3'>
            <h5 style={{ fontFamily: '-moz-initial' }}> Create new user:
              <span onChange={e => setError(e.target.value)} className="text-danger p" >{error}</span>
              <button className='m-2' style={{ border: 'none', borderRadius: 50 }}>
                <Link to='createuser' className="nav-link">
                  <IoMdPersonAdd />
                </Link>
              </button>
            </h5>
          </div>
        </div>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">image</th>
              <th scope="col">Btn</th>
            </tr>
          </thead>
          <tbody >
            {users}
          </tbody>
        </table>
      </section>

    </>

  )
}

export default Users