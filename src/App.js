import Footer from "./components/Footer";
import { TextSection, LinkSection } from "./components/Sections";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Hero from "./images/hero.jpg";
function App() {
  return (
    <div className="App">
      <Navbar />
      <img className="heroSection" src={Hero} alt="heroSection" />
      <TextSection />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "orange",
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            marginBlock: "50px",
          }}
        >
          Now Choose Your Servings
        </h2>
        <Slider />
      </div>
      <LinkSection />
      <Footer />
    </div>
  );
}

export default App;
