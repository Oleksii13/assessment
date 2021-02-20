import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSlidersH,
  faPrint,
  faFileDownload,
  faQuestionCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

<FontAwesomeIcon icon={faSlidersH} />;

const NavigationBar = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark' className='navigation'>
        <Navbar.Brand style={{ paddingLeft: '5%' }} href='#'>
          Diagnostic Tool
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>Logged in as General User |</Navbar.Text>
        </Navbar.Collapse>
        <Nav className='' style={{ marginRight: '5%' }}>
          <Nav.Link href='#'>
            <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>
          </Nav.Link>
          <Nav.Link href='#'>
            <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
          </Nav.Link>
          <Nav.Link href='#'>
            <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
          </Nav.Link>
          <Nav.Link href='#'>
            <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          </Nav.Link>
          <Nav.Link href='#'>
            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
