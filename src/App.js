import './App.css';
import React from 'react';
import NavigationBar from './components/NavigationBar';
import SideNav from './components/SideNav';
import MainScreen from './components/MainScreen';
// import { Container, Row, Col } from 'react-bootstrap/';

const App = () => {
  return (
    <>
      <NavigationBar />

      <SideNav />

      <MainScreen />
    </>
  );
};

export default App;
