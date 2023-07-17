import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Maquillage } from './pages/Maquillage/Maquillage';
import { Coiffure } from './pages/Coiffure/Coiffure';
import { Mariage } from './pages/Mariage/Mariage';
import { PortMariage } from './pages/Portfolio/PortMariage/PortMariage';
import { PortShooting } from './pages/Portfolio/PortShooting/PortShooting';
import { PortAudiovisuel } from './pages/Portfolio/PortAudiovisuel/PortAudiovisuel';
import { PortEvenementiel } from './pages/Portfolio/PortEvenementiel/PortEvenementiel';
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maquillage" element={<Maquillage />} />
      <Route path="/coiffure" element={<Coiffure />} />
      <Route path="/mariage" element={<Mariage />} />
      <Route path="/portfolio/mariage" element={<PortMariage />} />
      <Route path="/portfolio/shooting" element={<PortShooting />} />
      <Route path="/portfolio/audiovisuel" element={<PortAudiovisuel />} />
      <Route path="/portfolio/evenementiel" element={<PortEvenementiel />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
