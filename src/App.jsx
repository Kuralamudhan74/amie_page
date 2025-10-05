import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Benefits from './sections/Benefits';
import Products from './sections/Products';
import Waitlist from './sections/Waitlist';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  return (
    <SmoothScroll>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Products />
          <Waitlist />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}

export default App;
