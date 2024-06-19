import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosIns from "../../axios/axios";
import img from '../../img/login1.jpg'

export default function Sinup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [image, setimage] = useState('');
  const [role, setRole] = useState('')

  const URL = "api/users/auth/signup"
  const navigate = useNavigate()

  const submitUserSignup = async (e) => {
    e.preventDefault();
    console.log("sign up");

    const form = new FormData();
    form.append("firstname", firstname);
    form.append("lastname", lastname);
    form.append("image", image);
    form.append("email", email);
    form.append("password", password);
    form.append("passwordConfirm", passwordConfirm);
    try {
      const res = await axiosIns.post(`${URL}`, form)
      console.log(res, "res");
      if (res.status == 201) {
        const token = res.data.token;
        const role = res.data.role;
        const theName = res.data.firstname;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("name", theName);
        navigate('/')
      }

    } catch (er) {
      console.log(er, "eror");
    }


  }

  return (
    <>
      <section className="vh-100" >
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: '#f9f9f9' }}>
                <div className="card-body p-3  text-center">
                <img src={img} alt="login" style={{ borderRadius: 50, width: 100 }} />

                  <h2 className="mb-2 text-center">sign up </h2>
                  <h3 class="fs-6 fw-normal text-secondary mb-4">Enter your details to signup</h3>
                  <form onSubmit={submitUserSignup}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-floating ">
                          <input type="text" id="form3Example1" className="form-control" placeholder="First name"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)} />
                          <label className="form-label" htmlFor="form3Example1">First name <span className="text-danger">*</span></label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-floating ">
                          <input type="text" id="form3Example2" className="form-control" placeholder="Last name"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)} />
                          <label className="form-label" htmlFor="form3Example2">Last name  <span className="text-danger">*</span></label>
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div data-mdb-input-init className="form-floating mb-4">
                      <input type="email" id="form3Example3" className="form-control" placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example3">Email  <span className="text-danger">*</span></label>
                    </div>
                    {/* Password input */}
                    <div data-mdb-input-init className="form-floating mb-4">
                      <input type="password" id="form3Example4" className="form-control" placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example4">Password  <span className="text-danger">*</span></label>
                    </div>
                    {/* passwordConfirm */}
                    <div data-mdb-input-init className="form-floating mb-4">
                      <input type="password" id="form3Example4" className="form-control" placeholder="passwordConfirm"
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)} />
                      <label className="form-label" htmlFor="passwordConfirm">passwordConfirm  <span className="text-danger">*</span></label>
                    </div>
                    {/* image */}
                    <div data-mdb-input-init className="form-floating mb-4">
                      <input type="file" id="img" className="form-control" 
                        name="image"
                        onChange={e => setimage(e.target.files.item(0))} />
                      <label className="form-label" htmlFor="img">Image  <span className="text-danger">*</span></label>
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    {/* Submit button */}
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" >
                      Sign up
                    </button>

                  </form>

                  {/* Checkbox */}
                  {/* <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>)
}