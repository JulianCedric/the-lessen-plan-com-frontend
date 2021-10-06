import React from 'react';
import './App.css';
import Timer from './Timer';

class Lab2 extends React.Component {
  render() { 
    return (
      <div>
        <Timer />
        <br/>
        <br/>
        <label>work minutes: :00</label>
        <label>break minutes: :00</label>
      </div>
    );
  }
}
 
export default Lab2;