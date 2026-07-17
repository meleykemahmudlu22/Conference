import React from 'react'
import { SignIn } from "@clerk/clerk-react"
import Header from '../../components/Header/Header';
import "./login.css"

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="logincontainer">
        <SignIn
          signUpUrl="/register"
          fallbackRedirectUrl="/"
          appearance={{
            variables: {
              colorPrimary: "rgb(68, 0, 255)",
              colorBackground: "white",
              colorText: "black",
              colorTextSecondary: "rgb(100, 100, 100)",
              borderRadius: "0px",
            },
            elements: {
              cardBox: {
                width: "400px",
                maxWidth: "100%",
              },
              card: {
                border: "1px solid rgb(0, 183, 255)",
                boxShadow: "none",
                borderRadius: "0px",
                padding: "30px",
              },
              headerTitle: {
                color: "blueviolet",
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
              },
              formButtonPrimary: {
                width: "100%",
                borderRadius: "0px",
                backgroundColor: "rgb(68, 0, 255)",
                color: "white",
                padding: "12px",
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: "blue",
                }
              },
              formFieldInput: {
                border: "1px solid rgb(0, 183, 255)",
                borderRadius: "0px",
                padding: "10px",
                "&:focus": {
                  border: "1px solid blue",
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

export default Login;
