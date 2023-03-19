import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

const Header = () => {

  return (

    <header className="header-div">
      <div className="d-flex flex-column align-items-center">
        <div className="app-name">
          <Link className="" to="/">
            <h1 className="app-name">Gamer Match</h1>
            <p className="description">Link up with fellow gamers</p>
          </Link>
        </div>
        {/* <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info login" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light signup" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div> */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
