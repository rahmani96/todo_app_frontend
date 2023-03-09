import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';
import Login from './components/login/Login';
import { Routes, Route} from "react-router-dom";

function App() {
    
  return (
    <React.Fragment>
        <Routes>
            <Route exact path="/login"  element={<Login />} />
            <Route path="/" element={<Content />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
