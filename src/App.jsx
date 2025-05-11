import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Team from './components/Team/Team';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="camera-loader">
          <div className="lens"></div>
        </div>
        <p>FAST Videography Society</p>
      </div>
    );
  }

  return (
    <div className="app">
      <CustomCursor />
      <MusicPlayer />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Join />
      <Footer />
    </div>
  );
}

export default App;