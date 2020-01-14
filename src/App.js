import React from 'react';
import './assets/css/main.css';
import Header from './components/Header/Header';
import Biodata from './components/Biodata/Biodata';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import  Work from './components/Workhistory/Work'

function App() {
  return (
    <div>
      <Header/>
      <Biodata/>
      <Project style={{ marginBottom: '100px'}}/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
