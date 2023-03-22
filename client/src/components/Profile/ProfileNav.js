
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Auth from "../utils/auth";

const ProfileNav = ({currentPage, handlePageChange}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button name="profile" onClick={() =>handlePageChange('Profile')} >Profile</Button>
            <Button name="friends" onClick={() =>handlePageChange('Friends')}>Friends</Button>
            <Button name="posts" onClick={() =>handlePageChange('Posts')}>Posts</Button>
            {/* <Button name="comments" onClick={() =>handlePageChange('Comments')}>Comments</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ProfileNav;