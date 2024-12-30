import './App.css';
import './css/herofull.css'
import Header from './components/Header'
import Landing from './components/Landing.js'
import ShopPage from './components/ShopPage.js'
import AboutPage from './components/AboutPage.js'
import ErrorPage from './components/ErrorPage.js'
import ContactPage from './components/ContactPage.js'
// import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'
import BoxPage from './components/BoxPage.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


function App() {
  return (
    <div className='App'>    
    <Router>
        <div className="main-wrapper">    
        <Header />
        <Routes>
            <Route path="/" Component={Landing} />
            <Route path='/boxes' Component={BoxPage} > </Route>
            <Route path="/shop" Component={ShopPage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/*" Component={ErrorPage}/>
          </Routes>
          <Footer />  
        </div>
      {/* <ScrollToTop />     */}
      </Router>
    </div>
  );
}

export default App;
