
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";

const ProfileNav = ({currentPage, handlePageChange}) => {
  return (
    <div className="profile-nav-container">
    <Navbar >
     
        <Navbar.Brand  href="#home" > 
        </Navbar.Brand>
          <Nav className="prof-btn-container">
            <div >
            <Button name="profile" className='prof-btn' onClick={() =>handlePageChange('Profile')} >Profile</Button>
            <Button name="friends" className='prof-btn' onClick={() =>handlePageChange('Friends')}>Friends</Button>
            <Button name="posts" className='prof-btn' onClick={() =>handlePageChange('Posts')}>Posts</Button>
            </div>
          </Nav>

    </Navbar>
    </div>
  );
};

export default ProfileNav;