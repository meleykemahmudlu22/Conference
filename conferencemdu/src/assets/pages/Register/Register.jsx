import React from 'react'
import { MdEmail } from "react-icons/md";
import "./register.css"
import Header from '../../components/Header/Header';

const Register = () => {
  return (
    <div>
      <Header/>
      <div className="registercontainer">
        <form action="">
          <div className="forumtext">
            <div className="h2">Create  an Account</div>
          </div>
          <div className="foruminput">
            <div className="inputlabel">
              <label htmlFor="">Email</label>
              <div className="inputWrapper">
                <MdEmail className="emailiconform" />
                <input type="text" placeholder="Email daxil edin" />
              </div>
            </div>
            <div className="inputlabel">
              <label htmlFor="">Email</label>
              <div className="inputWrapper">
                <MdEmail className="emailiconform" />
                <input type="text" placeholder="Email daxil edin" />
              </div>
            </div>
            <div className="forumbtn">
              <button>Qeydiyyat</button>
            </div>

          </div>
          <div className="formSigIn">
            <p>Already have a account ? <a href="">Sigin IN</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
