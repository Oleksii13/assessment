import React, { useState, useContext } from 'react';
import Gauge from './Gauge';
import AreChart from './AreChart';
import { useFetch } from './useFetch';
import uuid from 'react-uuid';
import { LoopCircleLoading } from 'react-loadingg';
import '../App.css';
import TopBar from './TopBar';
import { Container, Row, Col } from 'react-bootstrap';
import FiltersButtons from './FiltersButtons';

const url =
  'https://raw.githubusercontent.com/Oleksii13/jsonHost/main/data.json';
const Context = React.createContext();
let selectedIndex = 0;

const MainScreen = () => {
  const { loading, data } = useFetch(url);
  const [chart, setChart] = useState('Quality Score');

  const switchAreaGraph = (name, index) => {
    selectedIndex = index;
    setChart(name);
  };

  return (
    <>
      <Context.Provider value={{ switchAreaGraph }}>
        <div>
          <TopBar />
        </div>
        <Container>
          <Row className='row-one'>
            <FiltersButtons></FiltersButtons>
          </Row>
          <Row>
            <Col sm={5}>
              {loading ? (
                <LoopCircleLoading />
              ) : (
                <List key={uuid()} gaugeData={data.gaugeData} />
              )}
            </Col>
            <Col sm={7}>
              {loading ? (
                <LoopCircleLoading />
              ) : (
                <AreChart data={data.areaData[chart]} />
              )}
            </Col>
          </Row>
        </Container>
        {/* ========================= */}
      </Context.Provider>
    </>
  );
};

const List = ({ gaugeData }) => {
  const { switchAreaGraph } = useContext(Context);
  return (
    <>
      {gaugeData.map((gauge, index) => {
        const { name } = gauge;
        return (
          <>
            <div
              className={`col-gauge ${
                index === selectedIndex ? 'active-btn' : ''
              } col-sm-6 col-md-6 col-lg-4`}
              key={uuid()}
              onClick={() => switchAreaGraph(name, index)}
            >
              <Gauge data={gauge} key={uuid()}></Gauge>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MainScreen;
