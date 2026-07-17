import React from 'react'
import { SignUp } from "@clerk/clerk-react"
import Header from '../../components/Header/Header';
import "./register.css"

const Register = () => {
  return (
    <div>
      <Header/>
      <div className="registercontainer">
        <SignUp
          signInUrl="/login"
          fallbackRedirectUrl="/"
          appearance={{
            variables: {
              colorPrimary: "blue",
              colorBackground: "white",
              colorText: "black",
              colorTextSecondary: "rgb(100, 100, 100)",
              borderRadius: "8px",
            },
            elements: {
              cardBox: {
                width: "400px",
                maxWidth: "100%",
              },
              card: {
                border: "1px solid #ccc",
                boxShadow: "none",
                borderRadius: "8px",
                padding: "25px",
              },
              headerTitle: {
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
              },
              formButtonPrimary: {
                width: "100%",
                borderRadius: "7px",
                backgroundColor: "blue",
                color: "white",
                padding: "12px",
                fontSize: "15px",
              },
              formFieldInput: {
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                "&:focus": {
                  borderColor: "#667eea",
                }
              },
              footerActionLink: {
                color: "blue",
                textDecoration: "none",
                "&:hover": {
                  color: "orange",
                }
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default Register;
