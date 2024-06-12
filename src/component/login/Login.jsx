import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect, useState } from 'react'
// import { storeToken } from '../../utils/authServices';
import axiosIns from '../../axios/axios';
export default function Login() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const [password, setPassword] = useState('');
  // const [loader, setShowHideLoader] = useState(false);

  const URL = "api/users/auth/login"
  const navigate = useNavigate()

  //   const formValidation =() =>{
  //     let isValid =true;

  //   if(!email){
  //     // toast.wran('email is require');
  //     console.log('error')
  //     isValid=false
  //   }
  //   if(!password){
  //     // toast.wran('password is require');
  //     console.log('password is require')

  //     isValid=false
  //   }
  //   return isValid
  // }
  const submitUserLogin = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const response = await axiosIns.post(`${URL}`, { password, email },
      //  { headers: { Authorization: `Bearer ${ response.data.token} ` }}
      );

      if (response.status == 200) {

        const token = response.data.token;
        console.log(token, 'token');
        const role = response.data.data.role;
        localStorage.setItem('token', token)
        localStorage.setItem('role', role)
        console.log(response);
        navigate('/')
      }
    }
    catch (e) {
      return (
          setError(()=>e.response.data.messagr)
          
       )
}
   
}

return (
  <>
    <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: '#f9f9f9' }}>
              <div className="card-body p-5 text-center">
              <img src="./login2.jpg" className='w-100' />

                <h2 className="mb-5">Login Account  </h2>
                <span  onChange={e => setError(e.target.value)} className="text-danger p" >{error}</span>
                <form onSubmit={submitUserLogin}>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email"
                      required
                      value={email}
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Email"
                      onChange={e => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="email">Email</label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" required minLength={6} maxLength={32} value={password} id="typePasswordX-2" className="form-control form-control-lg" placeholder="Enter Your Password"
                      onChange={e => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>
                  {/* Checkbox */}
                  {/* <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div> */}
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" type="submit"
                  >Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </>
)}

