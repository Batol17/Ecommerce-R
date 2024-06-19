
import React, { useEffect, useState } from 'react'
import axiosIns from '../../axios/axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoMdPersonAdd } from "react-icons/io";
import { BiShow } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import imgUrl from '../../imgUrl/imgURL';
import Alert from "./Alert.jsx"



function Users() {



  const [usersData, setUsersData] = useState([])
  const [error, setError] = useState([])
  const [imgurl, setImgurl] = useState('')
  const [img, setImg] = useState('');
  const navigate = useNavigate()

  const token = localStorage.getItem('token')



  useEffect(() => {
    getusers();
  }, [])

  const getusers = async () => {
    try {
      const response = await axiosIns.get('api/users?page=1&limit=100', {
        headers: { Authorization: `Bearer ${token} ` }
      })
      setUsersData(response.data.data)
      setImgurl(response.data.imgeUrl);


      console.log(response.data.data);
      console.log(response.data.imgeUrl);
      // setImgurl(`${axiosIns}`)
      // console.log(`${axiosIns}/uploads/users`)
      // console.log(response.data.data)
      // setImg(response.data.data[0].image)
      // console.log(`${imgurl}/${response.data.data[0].image}`);
      // setImgurl(`${axiosIns}/uploads/users`)

    } catch (e) {
      // setError(()=>e.response.data.messagr)
      console.log(e, 'error');
    }
  }


 

  const showData = usersData.length > 0 && usersData.map(function (user, index) {
    return (
        <tr key={index}>
          <td width={100}><img src={`${imgurl}/${user.image}`} width={100} style={{ borderRadius: 50, padding: '12px' }} alt='' /></td>
          <td >{user.firstname + ' ' + user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td className='d-flex'>
            <Link to={`UpdateUser/${user._id}`} className="nav-link">
              <span className="ms-1 d-none d-sm-inline text-success"><RxUpdate /></span>
            </Link>
            <button style={{ border: 'none', borderRadius: 50 }} type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span className="ms-1 d-none d-sm-inline text-danger" ><AiOutlineDelete /></span>
            </button>
          </td>
        {/* Modal */}
        <Alert id={user._id} />
        </tr> )

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
        <table className="table table-striped p-5 ">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Btn</th>
            </tr>
          </thead>
          <tbody >
            {showData}
          </tbody>
        </table>
        <div>
        </div>


      </section>

    </>

  )
}

export default Users