import React from 'react';
import { Navbar, Cta, Brand } from './components';
import { Footer, Blogs, Possibility, Features, WhatModernSite, Header } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatModernSite />
      <Features />
      <Possibility />
      <Cta />
      <Blogs />
      <Footer />
    </div >
  )
}

export default App;
