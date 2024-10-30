import React from 'react';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
  background: "transparent",
  color: "whitesmoke",
  border: "none",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  marginLeft: "5px",
  fontSize: "16px",
};

const Navbar = () => {
  const navigate = useNavigate(); // Call the hook correctly

  const homeTab = () => {
    navigate("/");
  };

  const fitnessTab = () => {
    navigate("/fitness");
  };

  const mindfulTab = () => {
    navigate("/mindful");
  };

  const nutritionTab = () => {
    navigate("/nutrition");
  };

  const supportTab = () => {
    navigate("/support");
  };

  return (
    <div style={{
      color: "white",
      fontWeight: "400",
      background: "transparent",
      position: "absolute",
      top: 0,
      width: "100%",
      padding: "1.5rem",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center", // Align items vertically centered
    }}>
      <p style={{
        textAlign: "left",
        color: "whitesmoke",
        fontStyle: "italic",
        fontWeight: "450",
        fontSize: "25px",
        paddingLeft: "15px",
        margin: "0px",
      }}>Sync Fit</p>

      <div style={{ display: "flex", alignItems: "center", marginLeft: "800px" }}> 
        <button style={buttonStyle} onClick={homeTab}>Home</button>
        <button style={buttonStyle} onClick={fitnessTab}>Fitness</button>
        <button style={buttonStyle} onClick={mindfulTab}>Mindfulness</button>
        <button style={buttonStyle} onClick={nutritionTab}>Nutrition</button>
        <button style={buttonStyle} onClick={supportTab}>Support</button>
      </div>
    </div>
  );
};

export default Navbar;