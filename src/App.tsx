import React from 'react';
import './App.css';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Project';
import Home from './Home';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='resume' element={<Resume/>}/>
        <Route path='projects' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
