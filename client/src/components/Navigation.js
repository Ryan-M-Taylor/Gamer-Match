import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Playstation from "./Playstation";
import Nintendo from "./Nintendo";
import Xbox from "./Xbox";
import PC from "./Pc";
import Profile from "./Profile";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
  const [showPlaystation, setShowPlaystation] = useState(true);
  const [showNintendo, setShowNintendo] = useState(false);
  const [showXbox, setShowXbox] = useState(false);
  const [showPC, setShowPC] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handlePlaystationClick = () => {
    setShowPlaystation(true);
    setShowNintendo(false);
    setShowXbox(false);
    setShowPC(false);
    setShowProfile(false);
  };

  const handleNintendoClick = () => {
    setShowNintendo(true);
    setShowPlaystation(false);
    setShowXbox(false);
    setShowPC(false);
    setShowProfile(false);
  };

  const handleXboxClick = () => {
    setShowXbox(true);
    setShowPlaystation(false);
    setShowNintendo(false);
    setShowPC(false);
    setShowProfile(false);
  };

  const handlePCClick = () => {
    setShowPC(true);
    setShowPlaystation(false);
    setShowNintendo(false);
    setShowXbox(false);
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowPlaystation(false);
    setShowNintendo(false);
    setShowXbox(false);
    setShowPC(false);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  return (
    <>
    <Navbar className="nav-links align-items-center">
      <Nav>
        {Auth.loggedIn() ? (
          <>
            <Nav.Item>
              <Nav.Link className="login" href="/me">
                <p className="login">{Auth.getProfile().data.username}'s profile</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="signup" onClick={logout}>
                <p className="signup">Logout</p>
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link href="/login">
                <p className="login">Login</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup">
                <p className="signup">Signup</p>
              </Nav.Link>
            </Nav.Item>
          </>
        )}
        <Nav.Item>
          <Nav.Link
            className="navigation-text"
            href="/playstation"
            onClick={handlePlaystationClick}
          >
            <p className="playstation">Playstation</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navigation-text"
            href="/nintendo"
            onClick={handleNintendoClick}
          >
            <p className="nintendo">Nintendo</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navigation-text"
            href="/xbox"
            onClick={handleXboxClick}
          >
            <p className="xbox">Xbox</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navigation-text"
            href="/pc"
            onClick={handlePCClick}
          >
            <p className="pc">PC</p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
      </>
  );
}

export default Navigation;
