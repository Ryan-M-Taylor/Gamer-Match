
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Auth from "../utils/auth";

const ProfileNav = ({currentPage, handlePageChange}) => {
  return (
    <Navbar>
     
        <Navbar.Brand href="#home"> 
        </Navbar.Brand>
          <Nav className="">
            <div className="d-flex align-items-center mb-2">
            <Button name="profile" className='prof-btn' onClick={() =>handlePageChange('Profile')} >Profile</Button>
            <Button name="friends" className='prof-btn' onClick={() =>handlePageChange('Friends')}>Friends</Button>
            <Button name="posts" className='prof-btn' onClick={() =>handlePageChange('Posts')}>Posts</Button>
            </div>
          </Nav>

    </Navbar>
  );
};

export default ProfileNav;