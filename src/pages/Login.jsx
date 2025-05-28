import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { loginUsers } from '../services/allAPIs';


function Login() {
    const [user, setUser] = useState({
        email: "", password: ""
    })
    const nav = useNavigate()
    const handleSubmit = async () => {
        // console.log(user)
        const { email, password } = user
        if (!email || !password) {
            alert("Enter Valid Input")
        }
        else {
            const result = await loginUsers(email, password)
            if (result.data.length > 0) {
                alert("Login Successfull")
                nav('/dash')
            }
            else {
                alert("Login Failed, Invalid Username or Password")
            }
        }
    }
    return (
        <>
            <div className="container-fluid row m-0 d-flex  justify-content-center align-items-center pb-4" style={{ minHeight: '95vh', background: 'linear-gradient(135deg,rgb(49, 34, 132),rgb(0, 0, 0),rgb(28, 28, 81))' }}>
                <div className="col-11 col-sm-10 col-md-8 col-lg-6 my-5">
                    <div className="mx-3 mx-sm-5 pt-4 rounded-4" style={{ backgroundColor: '#3f51b5' }}>
                        <div className="px-3 px-sm-4 px-md-5 py-4 text-light text-center d-flex flex-column justify-content-center">
                            <h2>Login</h2>
                            <div className="mx-2 mx-sm-4 mx-md-5 mt-4">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-4"
                                >
                                    <Form.Control onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                    className="mb-4"
                                >
                                    <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password" />
                                </FloatingLabel>
                                <div>
                                    <button className='btn btn-success px-5 shadow rounded-pill mb-3 mt-2' onClick={handleSubmit}>Login</button>
                                    <Link to={'/reg'} className='text-dark d-block fw-bold'>Register Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
