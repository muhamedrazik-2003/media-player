import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../services/allAPIs';
import { getAllusers } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Reg() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const { username, email, password } = data
        if (!username || !email || !password) {
            alert("enter Valid Input")
        }
        else {
            const users = await getAllusers()
            // console.log(data);
            // console.log(users);
            const existing = users.data.find(item => item.email === data.email || item.username === data.username)
            if (existing) {
                alert("User already Exists PLease Provide different Email And Password")
            }
            else {
                const result = await registerUser(data)
                if (result.status === 201) {
                    setData({ username: "", email: "", password: "" })
                    alert("registration successfull")
                    navigate('/log')
                    // console.log(data)
                }
                else {
                    alert("registration Failed")
                }
            }
        }
    }

    return (
        <>
<div
  className="container-fluid row m-0 d-flex justify-content-center align-items-center pb-4"
  style={{
    minHeight: '95vh',
    background: 'linear-gradient(135deg,rgb(49, 34, 132),rgb(0, 0, 0),rgb(28, 28, 81))',
  }}
>
  <div className="col-11 col-sm-10 col-md-8 col-lg-6 my-5">
    <div className="mx-3 mx-sm-5 pt-4 rounded-4" style={{ backgroundColor: '#3f51b5' }}>
      <div className="px-3 px-sm-4 px-sm-5 py-4 text-light text-center d-flex flex-column justify-content-center">
        <h2>Register</h2>
        <div className="mx-2 mx-sm-4 mx-md-5 mt-4">
          <FloatingLabel controlId="Username" label="Username" className="mb-3">
            <Form.Control
              onChange={(e) => setData({ ...data, username: e.target.value })}
              type="text"
              placeholder="username"
            />
          </FloatingLabel>

          <FloatingLabel controlId="email" label="Email address" className="mb-3">
            <Form.Control
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>

          <FloatingLabel controlId="password" label="Password" className="mb-3">
            <Form.Control
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>

          <div>
            <button className="btn btn-success px-4 px-sm-5 shadow rounded-pill mb-3 mt-3" onClick={handleSubmit}>
              Register
            </button>
            <Link to="/log" className="text-dark d-block fw-bold">
              Already a User?
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Reg
