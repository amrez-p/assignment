import Footer from "./components/Footer";
import { TextSection, LinkSection, SVGSection } from "./components/Sections";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Hero from "./images/hero.jpg";
function App() {
  return (
    <div className="App">
      <Navbar />
      <img className="heroSection" src={Hero} alt="heroSection" />
      <SVGSection />
      <TextSection />
      <div className="AppSliderContainer">
        <h2 className="AppSliderTitle">Now Choose Your Servings</h2>
        <Slider />
      </div>
      <LinkSection />
      <Footer />
    </div>
  );
}

export default App;
