import "./App.css";
import {
  Navbar1,
  Header,
  About,
  Timeline,
  Events,
  Talks,
  Pitches,
  Contact,
  Form,
  Pitch,  
  Sponser,
  Stalls,
  Carousel,
} from "./Components";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Header />
      <About />
      <Timeline />
      <Events />
      {/* <Talks /> */}
      {/* <Pitches /> */}
      <Stalls />
      <Pitch />
      {/* <Carousel /> */}

      <Sponser />
      <Contact />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}
export default App;
