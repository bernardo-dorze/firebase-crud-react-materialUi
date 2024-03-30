import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActivetab] = useState("Home");

  return (
    <div className="header">
      <h1 class="logo">CRUD </h1>
      <div className="header-right"></div>
    </div>
  );
};

export default Header;
