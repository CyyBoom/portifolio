import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Dropdown} from 'react-bootstrap';

function App() {
  return (
    <Dropdown.Menu show>
  <Dropdown.Header>Dropdown header</Dropdown.Header>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
</Dropdown.Menu>
  );
}

export default App;
