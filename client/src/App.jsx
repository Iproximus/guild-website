import './style/App.css';
import React from 'react';
import Header from './components/Header/Navbar'
import Features from './components/Features/Features';
import ContactUs from './components/ContactUs/contact_us';
import NewsletterForm from './components/Newsletter/NewsletterForm';
import Footer from './components/footer/footer';
// import OurTeam from './components/OutTeam/our_team';
import VideoContainer from './components/VideoContainer/video_container';
import CookiesScreen from './components/Cookie/cookies_screen';
import MetricScreen from './components/metrics/metric_screen'
import ProdHeader from './components/ProductNavBar/ProdHeader';
import Tabs from './components/tabs/tabs';
import Testimonials from './components/testimonials/testimonials';
function App() {

  return (
    <div>
      <div className="App">
        <Header />
        <div>
          <CookiesScreen />
          <VideoContainer />
          <Features />
          <Tabs />
          <MetricScreen />
          {/* <OurTeam /> */}
          <Testimonials />
          <ContactUs />
          <NewsletterForm />
        </div>
      </div>
      <ProdHeader />
      <div> <Footer /> </div>
    </div>
  );
}

export default App;