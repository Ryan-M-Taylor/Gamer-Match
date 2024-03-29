import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header-div">
        <div className="d-flex flex-column align-items-center">
          <div>
            <Link className="" to="/me">
              <h1 className="app-name main-div1">Gamer Match</h1>
            </Link>
            <p className="description">Link up with fellow gamers</p>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
};

export default Header;
