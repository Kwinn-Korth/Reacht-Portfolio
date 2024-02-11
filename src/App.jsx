import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/AboutMe';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import './App.css';

function App() {
    return (
        <Router>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </div>
        </Router>
    );
}

export default App;
