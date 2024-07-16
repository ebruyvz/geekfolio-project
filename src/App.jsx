import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Templates from './Templates';
import Inner from './Inner';
import Demos from './Demos';
import Photo from './Photo';
import ScrollProgress from './ScrollProgress';
import Loading from './Loading';
import Dot from './Dot';

function App() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[#191919] text-white'>
      <Loading />
      <Navbar />
      <Header />
      <Templates />
      <Inner />
      <Demos />
      <Photo />
      <ScrollProgress />
      <Dot />
    </div>
  )
}

export default App
