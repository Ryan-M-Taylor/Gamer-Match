import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CollapsibleSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Navbar bg="light" expand="lg" className="position-fixed" style={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: open ? '20%' : '10%',
      height: '100%'
    }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`flex-column ${open ? '' : 'd-none'}`}>
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Link 3</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <button className={`btn btn-secondary sidebar-toggle ${open ? 'd-none' : ''}`} onClick={handleToggle}>
        Open
      </button>
      <button className={`btn btn-secondary sidebar-toggle-close ${!open ? 'd-none' : ''}`} onClick={handleToggle}>
        Close
      </button>
    </Navbar>
  );
}

export default CollapsibleSidebar;
