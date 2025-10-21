import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import References from './pages/References';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="page-flex">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
