import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HeaderComponent from './components/HeaderComponent';
import HeroSectionComponent from './components/HeroSectionComponent';
import CardComponent from './components/CardComponent';
import FooterComponent from './components/FooterComponent';
import AboutComponent from './components/AboutComponent';
import TestimonialsComponent from './components/TestimonialsComponent';
import ContactComponent from './components/ContactComponent';
import CtaComponent from './components/CtaComponent';
import KnowMore from './components/KnowMore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/headers" element={<HeaderComponent />} />
        <Route path="/hero-sections" element={<HeroSectionComponent />} />
        <Route path="/cards" element={<CardComponent />} />
        <Route path="/footers" element={<FooterComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/testimonials" element={<TestimonialsComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/cta" element={<CtaComponent />} />
        <Route path="/our-story" element={<KnowMore />} />
      </Routes>
    </Router>
  );
}

export default App;