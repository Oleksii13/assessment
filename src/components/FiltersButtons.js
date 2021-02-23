import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonument, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

const FiltersButtons = () => {
  return (
    <>
      <Col>
        <div>Filters</div>
        <div>
          <ul>
            <li>
              All CQA Results{' '}
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='fa-flip-vertical'
              ></FontAwesomeIcon>
            </li>
            <li>
              CQAs with closed Loop{' '}
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='fa-flip-vertical'
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </Col>
      <Col>
        QUALITY SCORED TREND
        <Button variant='primary' disabled>
          Day
        </Button>{' '}
        <Button variant='primary'>Week</Button>{' '}
        <Button variant='primary' active>
          Month
        </Button>{' '}
        <Button variant='primary'>Quarter</Button>{' '}
        <Button variant='primary'>Half</Button>{' '}
        <Button variant='primary'>Year</Button>{' '}
      </Col>
    </>
  );
};

export default FiltersButtons;
