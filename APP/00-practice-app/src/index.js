import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import Form from './components/Form';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      
      <Route exact path="/react-portfolio">
        <Nav />
        <About />
        <Project />
        <Footer />
      </Route>
      <Route exact path="/contact">
        <Form />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
