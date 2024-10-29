import './App.css';
import './css/herofull.css'
import Header from './components/Header'
import BookRotator from './components/BookRotator'
import HeroSection from './components/HeroSection'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main-wrapper">
      <Header/>
      <div className="hero-wrapper">
        <BookRotator/>
        <HeroSection/>
      </div>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
