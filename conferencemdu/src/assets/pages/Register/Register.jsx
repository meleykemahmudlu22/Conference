import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import "./register.css"
import Header from '../../components/Header/Header';
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const getdata = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password
      });
      setMessage(data.message); 
    } catch (err) {
      setMessage(err.response?.data?.message || "Xəta baş verdi");
    }
  };

  return (
    <div>
      <Header/>
      <div className="registercontainer">
        <form onSubmit={getdata}>
          <div className="forumtext">
            <div className="h2">Create an Account</div>
          </div>
          <div className="foruminput">
            <div className="inputlabel">
              <label htmlFor="">Username</label>
              <div className="inputWrapper">
                <MdEmail className="emailiconform" />
                <input 
                  type="text" 
                  placeholder="Username daxil edin" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="inputlabel">
              <label htmlFor="">Password</label>
              <div className="inputWrapper">
                <MdEmail className="emailiconform" />
                <input 
                  type="password" 
                  placeholder="Şifrə daxil edin" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="forumbtn">
              <button type="submit">Qeydiyyat</button>
            </div>
          </div>
          <div className="formSigIn">
            <p>Already have an account? <a href="">Sign IN</a></p>
          </div>
        </form>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Register;
