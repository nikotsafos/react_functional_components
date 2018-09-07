import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import HomeImage from './HomeImage';
import HomePitch from './HomePitch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/stuff">Stuff</Link>
              <Link to="/homeImage">Home Image</Link>
              <Link to="/homePitch">Home Pitch</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={
              () => (<Contact name="Niko"
                      email='nikotsafos@gmail.com'
                      resume='resume'
                      linkedin='linkedin'
                      github="github"
              />)
            } />
            <Route path="/HomeImage" component={HomeImage} />
            <Route path="/homePitch" component={HomePitch} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
