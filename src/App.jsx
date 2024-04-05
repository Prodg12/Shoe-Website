import React from 'react';
import Header from './Header';
import Home from './Home';
import StylishText from './StylishText';
import "./App.css";

const App = () => {
  return (
    <main className='bg-[#000] text-white'>
      <Header/>

      <StylishText/>

      <Home/>
    </main>
  )
}

export default App