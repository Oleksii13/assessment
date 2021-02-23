import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonument, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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
    </>
  );
};

export default TopBar;
