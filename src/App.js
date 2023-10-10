
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import AboutUs from './components/pages/aboutus';
import WhatWeDo from './components/pages/whatwedo';

function App() {
  return (
    <div className="App" >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/whatwedo' element={<WhatWeDo/>}/>
    </Routes>
    </div>
  );
}

export default App;
