import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      toast.warning("Username and password are required", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      return;
    }

  
    console.log("Login attempt:", formData);
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    });

    
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('public/12.avif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "calc(100vh - 74px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 0"
    }}>
      <div className="container" style={{ maxWidth: '400px' }}>
        <div style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.95)", 
          borderRadius: '12px', 
          padding: '30px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
        }}>
          <div className="text-center mb-4">
            <h2 style={{ 
              color: "#1a1a2e", 
              fontWeight: "600",
              marginBottom: "5px"
            }}>Welcome Back</h2>
            <p style={{ color: "#666" }}>Sign in to continue to Culinary Compass</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label style={{ 
                fontWeight: "500", 
                color: "#444",
                marginBottom: "6px"
              }}>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleInput}
                placeholder="Enter your username"
                style={{ 
                  padding: "12px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd"
                }}
              />
            </div>
            
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <label style={{ 
                  fontWeight: "500", 
                  color: "#444",
                  marginBottom: "6px"
                }}>Password</label>
                <Link to="/forgot-password" style={{ 
                  color: "#00cba9", 
                  textDecoration: "none", 
                  fontSize: "14px"
                }}>
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleInput}
                placeholder="Enter your password"
                style={{ 
                  padding: "12px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd"
                }}
              />
            </div>
            
            <button 
              type="submit" 
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#00cba9",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "16px",
                marginTop: "10px",
                cursor: "pointer"
              }}
            >
              Sign In
            </button>
            
            <div className="text-center mt-4" style={{ color: "#666" }}>
              Don't have an account? <Link to="/register" style={{ color: "#00cba9", textDecoration: "none", fontWeight: "500" }}>Create Account</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};