import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import ContactMe from './components/Contact';
import Resume from './components/Resume';

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
