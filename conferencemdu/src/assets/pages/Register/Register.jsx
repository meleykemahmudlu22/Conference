import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import "./register.css"
import Header from '../../components/Header/Header';
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
  
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
 
    const re = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return re.test(password);
  };

  const getdata = async (e) => {
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

    // Password yoxlaması
    if (!validatePassword(password)) {
      Swal.fire({
        title: "Xəta!",
        text: "Şifrə ən az 6 simvol, 1 böyük hərf və 1 rəqəm olmalıdır",
        icon: "error",
        confirmButtonText: "Bağla"
      });
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password
      });

      Swal.fire({
        title: "🎉 Qeydiyyat uğurlu!",
        text: data.message,
        icon: "success",
        confirmButtonText: "Login səhifəsinə keç"
      }).then(() => {
    
        setUsername("");
        setPassword("");
    
        window.location.href = "/login";
      });

    } catch (err) {
      Swal.fire({
        title: "Xəta!",
        text: err.response?.data?.message || "Qeydiyyat alınmadı",
        icon: "error",
        confirmButtonText: "Bağla"
      });
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
              <label>Email</label>
              <div className="inputWrapper">
                <MdEmail className="emailiconform" />
                <input 
                  type="text" 
                  placeholder="Email daxil edin" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="inputlabel">
              <label>Password</label>
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
            <p>Already have an account? <a href="/login">Sign IN</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
