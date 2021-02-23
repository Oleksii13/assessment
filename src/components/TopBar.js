import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

const TopBar = () => {
  return (
    <>
      <Container>
        <Row className='perfomance-row'>
          <Col>PERFORMANCE MANAGEMENT</Col>
        </Row>
      </Container>
      <div class='diagnostic-row'>
        <Container>
          <Row>
            <Col>
              <FontAwesomeIcon
                icon={faGlobe}
                className='globe'
              ></FontAwesomeIcon>
              Diagnostic Tool{' '}
            </Col>
            <Col className='pin-col'>
              <FontAwesomeIcon
                icon={faThumbtack}
                className='pin'
              ></FontAwesomeIcon>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
