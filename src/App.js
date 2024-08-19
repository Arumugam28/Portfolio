import './App.css';
import About from './components/About';
import Contact from './components/Contacts';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects/>
      <Resume/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
