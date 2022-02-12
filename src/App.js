import logo from './logo.svg';
import './App.css';
import 'materialize-css';
import {
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import NewsPage from './NewsPage';
import ArticlePage from './ArticlePage';

function App() {
  return (
    <div className="App grey lighten-4">
      <header>
        <nav>
          <div className="nav-wrapper white row">
            <a href="/" className="brand-logo left s2 offset-s5 offset-m1 col center">
              <img src="/assets/Logo.png"/>
            </a>
            <ul id="nav-mobile" className="right hide-on-small-and-down">
              <li><a className="black-text" href="sass.html">About us</a></li>
              <li><a className="black-text" href="badges.html">What we do</a></li>
              <li><a className="black-text" href="collapsible.html">Our stuff</a></li>
              <li><a className="black-text" href="collapsible.html">Contact us</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <content>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
      </content>
      <footer className="page-footer white">
          <div className="container">
            <div className="row">
              <div className="center black-text">
                <h3>Find out more at <a href="https://people.com">www.people.com</a></h3>
              </div>
            </div>
          </div>
          <div className="footer-copyright grey darken-3">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </div>
  );
}



export default App;
