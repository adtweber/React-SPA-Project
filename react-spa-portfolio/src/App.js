import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
// import AboutMe from './components/AboutMe'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
// import ContactForm from './components/ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <AboutMe />
      <Skills />
      <Projects />
      <ContactForm /> */}
      </div>
    </Router>
  );
}

export default App;
