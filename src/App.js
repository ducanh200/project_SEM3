
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import AboutUs from './components/pages/aboutus';
import WhatWeDo from './components/pages/whatwedo';
import Topic from './components/pages/topic';
import Dashboard from './components/pages/admin/dashboard';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/whatwedo' element={<WhatWeDo/>}/>
      <Route path='/topic' element={<Topic/>}/>

      <Route path='admin/' element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
