import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Container from 'react-bootstrap/Container';
import Homepage from './Components/Homepage';
import About from './Content/About';
import Skills from './Content/Skills';
import Footer from './Components/Footer';

function App() {
  return (
    <Container fluid className="App">
      <NavBar/>
      <Homepage/>
      <About/>
      <Skills/>
      <Footer/>
    </Container>
  );
}

export default App;
