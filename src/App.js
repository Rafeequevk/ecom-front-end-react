import "./App.css";
import BestDeals from "./components/bestdeals/BestDeals";
import Classified from "./components/classified/Classified";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import NavBar from "./components/common/navbar/NavBar";
import TopBar from "./components/common/topbar/TopBar";
import NewwsLetter from "./components/newsletter/NewwsLetter";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className='app'>
      <TopBar />
      <Header />
      <NavBar />
      <Slider />
      <BestDeals />
      <Classified />
      <NewwsLetter />
      <Footer />
    </div>
  );
}

export default App;
