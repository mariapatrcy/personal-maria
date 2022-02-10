import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; //bisa diaktifin dulu
import Masthead from './components/Masthead';
import Homepageplayers from './components/Homepageplayer';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Profile from './components/Profile/Profile';
// import Portfolio from './components/Portfolio';
// import Services from './components/Services';

function App(){
  return (
    <>
    {/* <!-- Navigation--> */}
    <Navbar/> 
    {/* <!-- Masthead--> */}
    <Masthead/>
    {/* <!-- Homepagelayers--> */}
    <Homepageplayers/>
    {/* <!-- Contact--> */}
     <Contactus/>
    {/* <!-- Footer--> */}
    <Footer/>
    <Profile/>

    </>
  );
}

export default App;