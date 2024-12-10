import "./App.css";
import Homepage from "../pages/homepage/home";
import Nav from "./components/navbar/nav";
import Who from "./components/whowe/who";
import Offer from "./components/offer/offer";
import MainOffer from "./components/offer/mnOffer";
import Coming from "./components/coming/coming";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Homepage />
        <Footer/>
      </div>
    </>
  );
}

export default App;
