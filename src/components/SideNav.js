import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faEnvelopeOpenText,
  faFileExport,
  faThumbtack,
  faShapes,
} from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <>
      <Nav
        defaultActiveKey='#'
        className='flex-column sidebar mr-auto'
        variant='dark'
      >
        <Nav.Link href='#'>
          <FontAwesomeIcon icon={faThumbtack}></FontAwesomeIcon>
        </Nav.Link>
        <Nav.Link href='#'>
          <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
        </Nav.Link>
        <Nav.Link href='#'>
          <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
        </Nav.Link>
        <Nav.Link href='#'>
          <FontAwesomeIcon icon={faShapes}></FontAwesomeIcon>
        </Nav.Link>
        <Nav.Link href='#'>
          <FontAwesomeIcon icon={faFileExport}></FontAwesomeIcon>
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SideNav;
