import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosIns from '../../axios/axios';
function CreateUser() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [role, setRole] = useState('')
  const [image, setimage] = useState('')

  const URL = "/api/users/adduser"
  const navigate = useNavigate()

  const submitUserSignup = async (e) => {
    console.log(firstname, lastname, password, passwordConfirm, email);
    e.preventDefault();
    console.log("create");
    let item = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      role: role,

    }
    const form = new FormData();
    form.append("firstname", firstname);
    form.append("lastname", lastname);
    // form.append("image", image);
    form.append("email", email);
    form.append("password", password);
    form.append("passwordConfirm", passwordConfirm);
    try {
      const res = await axiosIns.post(`${URL}`, form,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` } }
      )
      console.log(res, "res");
      console.log(form, "form");

      // const token = res.data.token;
      // const role = res.data.role;
      // const theName = res.data.firstname;
      // localStorage.setItem("token", token);
      // localStorage.setItem("role", role);
      // localStorage.setItem("name", theName);
      // res.status == 200

    } catch (er) {
      console.log(er, "eror");
    }


  }
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex  h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div style={{ borderRadius: '1rem', backgroundColor: '#f9f9f9' }}>
                <div className="card-body p-5">
                  <h2 className="mb-5">Show User </h2>
                  <form onSubmit={submitUserSignup} >
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" htmlFor="form3Example1">First name
                            <span className='text-primary'>  *</span>
                          </label>

                          <input type="text" id="form3Example1" className="form-control"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" htmlFor="form3Example2">Last name
                            <span className='text-primary'>  *</span>
                          </label>

                          <input type="text" id="form3Example2" className="form-control"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)} />
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">Email
                        <span className='text-primary'>  *</span>
                      </label>

                      <input type="email" id="form3Example3" className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    </div>
                    {/* Password input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Password</label>

                      <input type="password" id="form3Example4" className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    {/* passwordConfirm input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example5">passwordConfirm</label>

                      <input type="password" id="form3Example5" className="form-control"
                        value={passwordConfirm}
                        onChange={e => setpasswordConfirm(e.target.value)} />
                    </div>

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">

                    </div>
                    {/* Submit button */}
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" >
                      Create
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

export default CreateUser