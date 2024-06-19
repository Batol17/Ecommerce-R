import React, { useEffect } from 'react'
import { useState } from 'react';
import Loader from '../loading/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import axiosIns from '../../axios/axios';
function UpdateUser() {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    password:''
  })

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const [img, setImg] = useState('');
  const [imgeUrl, setimgeUrl] = useState('');





  const navigate = useNavigate()

  const { id } = useParams()
  const URL = `/api/users/${id}`

  const update = async () => {
    try {
      const res = await axiosIns.get(`${URL}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` } }
      )
      if (res.status === 200){
        setUserData(res.data.data);
      setimgeUrl(res.data.imgeUrl);
      setImg(res.data.data.image)
    }
    }
    catch (er) {
      console.log(er, "eror");
    }
  }


  useEffect(() => {
    update();
  }, [])


  const handelInput = (e) => {
    e.preventDefault();
    const name= e.target.name;
    const value= e.target.value;
    setUserData({ ...userData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axiosIns.patch(`${URL}`, { userData },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` } }
    )
    try {
   
        if (res.data.status === "success") {
          setUserData(res.data.data)
            alert("admin updated")
            navigate('/')
            }
      
      
      console.log(res.data);
      // setIsLoading(true)

    }
    catch (er) {
      console.log(er, "eror");
      // setIsLoading(false);
    }

  }

  return (
    <>
      <section className="vh-100">
        <div className="heading">
          {isLoading && <Loader />}
          {error && <p>Error: {error}</p>}
          <p>Edit Form</p>
        </div>
        <div className="container py-5 h-100">
          <div className="row d-flex  h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div style={{ borderRadius: '1rem', backgroundColor: '#f9f9f9' }}>
                <div className="card-body p-5">
                  <div className='d-flex justify-content-center'>
                    <img src={`${imgeUrl}/${img}`} alt="img" style={{ borderRadius: 50, width: 50 }} />
                  </div>
                  <h2 className="mb-5">Update  User </h2>
                  <form onSubmit={handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline" >
                          <label className="form-label" htmlFor="form3Example1">First name
                            <span className='text-primary'>  *</span>
                          </label>

                          <input type="text" id="name" name='firstname' className="form-control"
                            value={userData.firstname}
                            onChange={handelInput} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" htmlFor="form3Example2">Last name
                            <span className='text-primary'>  *</span>
                          </label>

                          <input type="text" id="lastname" name='lastname' className="form-control"
                            value={userData.lastname}

                            onChange={handelInput} />
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Email
                        <span className='text-
primary'>  *</span>
                      </label>

                      <input type="email" id="email" name='email' className="form-control"
                        value={userData.email}

                        onChange={handelInput} />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">Role
                        <span className='text-primary'>  *</span>
                      </label>

                      <input type="text" id="role" name='role' className="form-control"
                        value={userData.role}

                        onChange={handelInput} />
                    </div>

                    {/* Password input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Password</label>

                      <input type="text" id="password" name='password' className="form-control"
                        value={userData.password}

                        onChange={handelInput} />
                    </div>
                    {/* image */}
                    {/* <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="image">Image</label>

                      <input type="file" id="image" name='image' className="form-control"
                    
                     onChange={handelInput} 
                        />
                    </div> */}

                    {/* Submit button */}
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" >
                      update
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default UpdateUser





