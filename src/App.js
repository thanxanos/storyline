import './App.css';
import './css/herofull.css'
import Header from './components/Header'
import BookRotator from './components/BookRotator'
import MidSection from './components/MidSection'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main-wrapper">
      <Header/>
        <BookRotator />
      <MidSection />
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
