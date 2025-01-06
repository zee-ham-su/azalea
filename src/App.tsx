import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Programs from './components/Programs';
import Education from './components/Education';
import GetInvolved from './components/GetInvolved';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Period Power Ghana | Breaking Stigmas, Building Confidence</title>
        <meta name="description" content="Join Period Power Ghana in our mission to break stigmas and create lasting change in menstrual health equity through education and community support." />
        <meta property="og:title" content="Period Power Ghana" />
        <meta property="og:description" content="Breaking stigmas and creating lasting change in menstrual health equity through education and community support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Period Power Ghana" />
        <meta name="twitter:description" content="Breaking stigmas and creating lasting change in menstrual health equity." />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Impact />
        <Programs />
        <Education />
        <GetInvolved />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;