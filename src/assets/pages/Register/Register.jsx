import React from 'react'
import { SignUp } from "@clerk/clerk-react"
import Header from '../../components/Header/Header';
import "./register.css"

const Register = () => {
  return (
    <div>
      <Header/>
      <div className="registercontainer">
        <div className="background-glow blob-1"></div>
        <div className="background-glow blob-2"></div>
        <div className="background-glow blob-3"></div>
        <div className="login-card-wrapper">
          <SignUp
            signInUrl="/login"
            fallbackRedirectUrl="/"
            appearance={{
              variables: {
                colorPrimary: "#4f46e5",
                colorBackground: "white",
                colorText: "#0f172a",
                colorTextSecondary: "#475569",
                borderRadius: "12px",
              },
              elements: {
                card: {
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  padding: "30px",
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Register;
