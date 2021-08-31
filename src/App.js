import './App.css'

import Header from "./components/Header/";
import AvailableNow from "./components/AvailableNow/";
import Hero from "./components/Hero/";
import Form from "./components/Form/";
import Payment from "./components/Payment";
import Description from "./components/Description";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

import SectionDivider from './components/SectionDivider/'

function App() {
  return (
    <div class='page-container'>
      <Header />
      <AvailableNow />
      <Hero />

      <SectionDivider />

      <Form />
      <SectionDivider />
      <Payment />
      <SectionDivider />
      <Description />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
