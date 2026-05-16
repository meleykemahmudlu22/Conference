import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import "./login.css"
import Header from '../../components/Header/Header';

const Login = () => {
  return (
    <div>
        <Header/>
      <div className="logincontainer">
        <form action="">
            <div className="welcome">
                < FaUserCircle className='usericon'/>
                <h2>Xoş Gəlmisiniz</h2>
            </div>
           <div className="forumbox">
             <div className="loginlabel">
                <label htmlFor="">Email</label>
                <div className="inpicon">
                    <MdEmail className='loginemailicon'/>
                     <input type="text" name="" id="" />
                </div>
               
            </div>
            <div className="loginlabel">
                <label htmlFor="">password</label>
                <div className="inpicon">
                    <RiLockPasswordFill className='loginemailicon'/>
                     <input type="text" name="" id="" />
                </div>
            </div>
            <div className="loginbtn">
                <button>Giriş</button>
            </div>
             <div className="account">
            <p>Hesabınız yoxdur? <a href="">Buradan Qeydiyyatdan keçin</a></p>
        </div>
           </div>
        </form>
       
      </div>
    </div>
  )
}

export default Login
