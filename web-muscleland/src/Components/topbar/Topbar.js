import React from "react";
import "./topbar.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyTopbar() {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MUSCLE LAND</span>
        </div>
        <div className="topRight">
          <div className="topbarContainer">
            <span className="userName">User : {user.username}</span>
            <Button onClick={handleLogout} variant="light" className="Logout">
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
