import React, { useEffect } from 'react';
import { SignUp, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from '../../components/Header/Header';
import "./register.css";

const Register = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      Swal.fire({
        toast: true,
        position: "top",
        icon: "info",
        title: "You are already registered and signed in!",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        background: "#3B1E8C",
        color: "#ffffff"
      });
      navigate("/");
    }
  }, [isSignedIn, navigate]);

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
  );
};

export default Register;
