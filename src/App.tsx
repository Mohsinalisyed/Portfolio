import React from 'react';
import './App.css';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Project';
import Home from './Home';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div >
      <BrowserRouter><Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='resume' element={<Resume/>}/>
        <Route path='projects' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
