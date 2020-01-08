import React from 'react';
import Screenshot from '../components/screenshot';
import NavbarLanding from '../containers/navbarlanding';
import Team from './teampage';
import Footer from './footer';
import Features from './features';
import Title from './title';
import Review from './review';
import About from './aboutUs';
export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      {/* LandpageNavBar */}
      <NavbarLanding />

      {/* Title */}
      <Title />

      {/* Features */}
      <Features />

      {/* App Screenshots */}
      <h2 className="text-4xl flex justify-center font-sembold text-black-600 pb-6" id="demo">
        App Screenshots
      </h2>
      <Screenshot />

      {/* Review */}
      <Review />
      {/*about*/}
      <About />
      {/* Team */}
      <Team />

      {/* footer */}
      <Footer />
    </div>
  );
}
