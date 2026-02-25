import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Arrow from './Arrow';
import {HashRouter as Router , Route, Routes } from 'react-router-dom'; 
import Header from './Header';
import AboutMe from './section/AboutMe';
import MyWork from './section/MyWork';
import Contract from './section/Contract';
import WorkDetail from './section/WorkDetail';
import LayOut from './LayOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route element = {<LayOut />}>
            <Route path="/" element={<Header />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/MyWork" element={<MyWork />} />
            <Route path="/MyWork/:workId" element={<WorkDetail />} />
            <Route path="/Contract" element={<Contract />} />
          </Route>      
        </Routes>
    </Router>

    <Arrow />
  </React.StrictMode>
);

reportWebVitals();
