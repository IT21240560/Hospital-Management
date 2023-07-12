import './App.css';
import React from 'react';
import Header from './components/Header'
import AddPatient from './components/AddPatient';
//import PateintDetailsManagement from './components/ManagePatient';
import UpdatePatientDetails from './components/UpdatePatientDetails';
import ManagePatient from './components/ManagePatient'
import GeneratePDF from './components/GeneratePDF'
import {BrowserRouter , Routes, Route}from 'react-router-dom'
import About from './components/About';
import Home from './components/Home'
import Footer from './footer/footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className="components">
          <Routes>

            {/*<Route path="/" element={<AllPatients/>}/>*/}
            <Route path="/add" element={<AddPatient/>}/>
            {/*<Route path="/manage" element={<PateintDetailsManagement/>}/>*/}
            <Route path = "/Home" element={<Home/>}/>
            <Route path="/GeneratePDF" element={<GeneratePDF/>}/>
            <Route path="/ManagePatient" element={<ManagePatient/>}/>
            <Route path="/Update/:id" element={<UpdatePatientDetails/>}/>
            <Route path = "/About" element={<About/>}/>
   
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
