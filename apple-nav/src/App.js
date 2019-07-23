import React from 'react';
import {Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import dummyData from './components/dummyData';
import './App.css';

const topdata = dummyData;

function App() {
  
  return (
    <div className="App">
    <Route path="/" render= {(props)=> <TopNav {...props} topdata={topdata}/>}/>
    </div>
  );
}

export default App;
