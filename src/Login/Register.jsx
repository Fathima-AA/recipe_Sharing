import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  
  const [formdata, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    conf_password: ''
  });
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };
  
  const checkValidation = () => {
    if (!formdata.username || !formdata.email || !formdata.password || !formdata.conf_password) {
      toast.warning("All fields are required", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formdata.email.toLowerCase())) {
      toast.warning("Please enter a valid email", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      return false;
    }
    
    if (formdata.password !== formdata.conf_password) {
      toast.warning("Passwords do not match", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      console.log("User Registered:", formdata);
      toast.success("Registration Successful!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      
      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
        conf_password: '',
      });
      
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
  
  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/public/12.avif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "calc(100vh - 74px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 0"
    }}>
      <div className="container" style={{ maxWidth: '450px' }}>
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
            }}>Create an Account</h2>
            <p style={{ color: "#666" }}>Join Culinary Compass to discover and share recipes</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label style={{ 
                fontWeight: "500", 
                color: "#444",
                marginBottom: "6px"
              }}>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                value={formdata.name}
                onChange={handleInput}
                style={{ 
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd"
                }}
              />
            </div>
            
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
                placeholder="Choose a username"
                value={formdata.username}
                onChange={handleInput}
                style={{ 
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd"
                }}
                required
              />
            </div>
            
            <div className="mb-3">
              <label style={{ 
                fontWeight: "500", 
                color: "#444",
                marginBottom: "6px"
              }}>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formdata.email}
                onChange={handleInput}
                style={{ 
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd"
                }}
                required
              />
            </div>
            
            <div className="mb-3">
              <label style={{ 
                fontWeight: "500", 
                color: "#444",
                marginBottom: "6px"
              }}>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                value={formdata.password}
                onChange={handleInput}
                style={{ 
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd"
                }}
                required
              />
            </div>
            
            <div className="mb-4">
              <label style={{ 
                fontWeight: "500", 
                color: "#444",
                marginBottom: "6px"
              }}>Confirm Password</label>
              <input
                type="password"
                name="conf_password"
                className="form-control"
                placeholder="Confirm your password"
                value={formdata.conf_password}
                onChange={handleInput}
                style={{ 
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd"
                }}
                required
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
              Create Account
            </button>
            
            <div className="text-center mt-4" style={{ color: "#666" }}>
              Already have an account? <Link to="/login" style={{ color: "#00cba9", textDecoration: "none", fontWeight: "500" }}>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;