import React, { useState, useContext } from 'react';
import Gauge from './Gauge';
import AreChart from './AreChart';
import { useFetch } from './useFetch';
import uuid from 'react-uuid';
import { LoopCircleLoading } from 'react-loadingg';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonument } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
// import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const url =
  'https://raw.githubusercontent.com/Oleksii13/jsonHost/main/data.json';
const Context = React.createContext();

const MainScreen = () => {
  const { loading, data } = useFetch(url);
  const [chart, setChart] = useState('Interaction');

  const switchAreaGraph = (name) => {
    setChart(name);
  };

  return (
    <>
      <Context.Provider value={{ switchAreaGraph }}>
        <div>PERFOMANCE MANAGEMENT</div>
        <div>
          Diagnostic Tool{' '}
          <FontAwesomeIcon
            icon={faMonument}
            className='fa-flip-vertical'
          ></FontAwesomeIcon>
        </div>
        <div>
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
        </div>
        {loading ? (
          <LoopCircleLoading />
        ) : (
          <AreChart data={data.areaData[chart]} />
        )}
        <div className='container'>
          {loading ? (
            <LoopCircleLoading />
          ) : (
            <List key={uuid()} gaugeData={data.gaugeData} />
          )}
        </div>
        {/* ========================= */}
      </Context.Provider>
    </>
  );
};

const List = ({ gaugeData }) => {
  const { switchAreaGraph } = useContext(Context);
  return (
    <>
      {gaugeData.map((gauge) => {
        const { name } = gauge;
        return (
          <>
            <button key={uuid()} onClick={() => switchAreaGraph(name)}>
              <Gauge data={gauge} key={uuid()}></Gauge>
            </button>
          </>
        );
      })}
    </>
  );
};

export default MainScreen;
