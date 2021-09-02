import './App.css'

import { Experiment, Variant } from 'react-lean-analytics';

import Header from "./components/Header/";
import AvailableNow from "./components/AvailableNow/";
import Hero from "./components/Hero/";
import Form from "./components/Form/";
import Payment from "./components/Payment/";
import Description from "./components/Description/";
import ComingSoon from "./components/ComingSoon/";
import Footer from "./components/Footer/";

import SectionDivider from './components/SectionDivider/'

function App() {
  return (
    <div className='page-container'>
      <Header />
      <AvailableNow />
      <Hero />

      <SectionDivider />

      <Experiment trackedAction="Different texts"
        id="03883355-e59e-4b29-82cf-0da99aba401c">
        <Variant description={`Original`}>
          {(callback) => (
            <Form
              onAction={callback}
              title="Are you a parent without a nanny and looking to share?"
              description="Leave us your name and email and we’ll update you as soon as a share becomes available in your area!"
            />
          )}
        </Variant>
        <Variant description={`Alternative`}>
        {(callback) => (
            <Form
              onAction={callback}
              title="Create the childcare you need at a price you can afford"
              description="Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started."
            />
          )}
        </Variant>
      </Experiment>

      <SectionDivider />

      <Payment />

      <SectionDivider />

      <Description />

      <SectionDivider />
      
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
