import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg" 
      style={{
        position: "sticky", 
        top: "0", 
        zIndex: "100",
        backgroundColor: "#1a1a2e",
        padding: "12px 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <div className="container">
       
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ color: "#fff" }}>
          <img
            src="public/13.jpg"
            alt="Logo"
            width="45"
            height="45"
            className="d-inline-block align-top me-2"
            style={{ borderRadius: "50%", border: "2px solid #00cba9" }}
          />
          <div style={{ lineHeight: "1.2" }}>
            <span style={{ fontSize: "22px", fontWeight: "700" }}>Culinary</span>
            <br />
            <span style={{ fontSize: "16px", color: "#00cba9" }}>Compass</span>
          </div>
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "1px solid #00cba9" }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "brightness(0) invert(1)" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                to="/" 
                className="nav-link" 
                style={{ 
                  color: "#fff", 
                  fontWeight: "500", 
                  margin: "0 5px",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "rgba(0, 203, 169, 0.2)"}
                onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/myrecipes" 
                className="nav-link" 
                style={{ 
                  color: "#fff", 
                  fontWeight: "500", 
                  margin: "0 5px",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "rgba(0, 203, 169, 0.2)"}
                onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
              >
                My Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/favorites" 
                className="nav-link" 
                style={{ 
                  color: "#fff", 
                  fontWeight: "500", 
                  margin: "0 5px",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "rgba(0, 203, 169, 0.2)"}
                onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
              >
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/explore" 
                className="nav-link" 
                style={{ 
                  color: "#fff", 
                  fontWeight: "500", 
                  margin: "0 5px",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "rgba(0, 203, 169, 0.2)"}
                onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
              >
                Explore
              </Link>
            </li>
          </ul>

        
          <div className="d-flex align-items-center">
            <Link 
              to="/login" 
              className="btn me-2" 
              style={{ 
                backgroundColor: "transparent", 
                border: "1px solid #00cba9", 
                color: "#00cba9",
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#00cba9";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#00cba9";
              }}
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="btn" 
              style={{ 
                backgroundColor: "#00cba9", 
                border: "none", 
                color: "#fff",
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#00b096"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#00cba9"}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};