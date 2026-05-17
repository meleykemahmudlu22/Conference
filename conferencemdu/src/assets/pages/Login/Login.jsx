import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import "./login.css"
import Header from '../../components/Header/Header';
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", data.token); // token saxlanır
      setMessage("Login uğurlu oldu!");
      // Burada yönləndirmə edə bilərsən:
      window.location.href = "/";
    } catch (err) {
      setMessage(err.response?.data?.message || "Xəta baş verdi");
    }
  };

  return (
    <div>
      <Header/>
      <div className="logincontainer">
        <form onSubmit={handleLogin}>
          <div className="welcome">
            <FaUserCircle className='usericon'/>
            <h2>Xoş Gəlmisiniz</h2>
          </div>
          <div className="forumbox">
            <div className="loginlabel">
              <label>Email</label>
              <div className="inpicon">
                <MdEmail className='loginemailicon'/>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="loginlabel">
              <label>Şifrə</label>
              <div className="inpicon">
                <RiLockPasswordFill className='loginemailicon'/>
                <input
                  type="password"
                  placeholder="Şifrə"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="loginbtn">
              <button type='submit'>Giriş</button>
            </div>
            <div className="account">
              <p>Hesabınız yoxdur? <a href="">Buradan Qeydiyyatdan keçin</a></p>
            </div>
          </div>
        </form>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Login;
