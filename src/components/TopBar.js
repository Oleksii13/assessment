import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonument } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const TopBar = () => {
  return (
    <>
      <div>PERFOMANCE MANAGEMENT</div>
      <div>
        Diagnostic Tool{' '}
        <FontAwesomeIcon
          icon={faMonument}
          className='fa-flip-vertical'
        ></FontAwesomeIcon>
      </div>
      <div>Filters</div>
      <div>
        <ul>
          <li>All CQA Results</li>
        </ul>
      </div>
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
    </>
  );
};

export default TopBar;
