import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  