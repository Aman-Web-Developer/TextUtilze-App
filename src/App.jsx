import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style = "background:#3f474f";
      showAlert("Dark Mode has been enabled", "success");

    } else {
      setMode("light");
      document.body.style = "background:#fff";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <Forms heading="Try TextUtilze App - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode} />
      {/* <Routes>
        <Route path='/' element={<Forms heading="Try TextUtilze App - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode} />} />
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='*' element={<h1 style={{ margin: "50px auto", display: "block", width: "fit-content", }}>Error Page</h1>} />
      </Routes> */}
    </>
  );
}


