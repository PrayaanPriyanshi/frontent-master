import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Women from './Components/Women/Women';
import Needledust from './Components/Needledust/Needledust';
import Purses from './Components/Purses/Purses';
import Man from './Components/Man/Man';
import Kids from './Components/Kids/Kids';
import Gifting from './Components/Gifting/Gifting';
import Celebrities from './Components/Celebrities/Celebrities';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juttis from './Components/Women/Juttis';
import Heels from './Components/Women/Heels';
import Kolhaparis from './Components/Women/Kolhaparis';
import Sandals from './Components/Women/Sandals';
import Mules from './Components/Women/Mules';
import ViewAll from './Components/Needledust/ViewAll';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/women" element={<Women />} />
          <Route path="/needledust-x-abhinav-mishra" element={<Needledust />} />
          <Route path="/purses" element={<Purses />} />
          <Route path="/man" element={<Man />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/gifting" element={<Gifting />} />
          <Route path="/celebrities" element={<Celebrities />} />

          <Route path="/juttis" element={<Juttis />} />
          <Route path="/heels" element={<Heels />} />
          <Route path="/kolha" element={<Kolhaparis />} />
          <Route path="/sandals" element={<Sandals />} />
          <Route path="/mules" element={<Mules />} />
          <Route path="/view" element={<ViewAll />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
