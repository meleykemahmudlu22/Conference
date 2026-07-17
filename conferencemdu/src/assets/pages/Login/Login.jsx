import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import "./login.css"
import Header from '../../components/Header/Header';
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

  
    if (!validateEmail(username)) {
      Swal.fire({
        title: "Xəta!",
        text: "Email formatı düzgün deyil",
        icon: "error",
        confirmButtonText: "Bağla"
      });
      return;
    }


    if (!password) {
      Swal.fire({
        title: "Xəta!",
        text: "Şifrə boş ola bilməz",
        icon: "error",
        confirmButtonText: "Bağla"
      });
      return;
    }

    try {
      const { data } = await axios.post("/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", data.token);

      Swal.fire({
        title: "🎉 Login uğurlu!",
        text: "Xoş Gəlmisiniz!",
        icon: "success",
        confirmButtonText: "Ana səhifəyə keç"
      }).then(() => {
       
        setUsername("");
        setPassword("");
      
        window.location.href = "/";
      });

    } catch (err) {
      Swal.fire({
        title: "Xəta!",
        text: err.response?.data?.message || "Login alınmadı",
        icon: "error",
        confirmButtonText: "Bağla"
      });
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
                  placeholder="Email"
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
              <p>Hesabınız yoxdur? <a href="/register">Buradan Qeydiyyatdan keçin</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
