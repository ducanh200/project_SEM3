
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import AboutUs from './components/pages/aboutus';
import WhatWeDo from './components/pages/whatwedo';
import Topic from './components/pages/topic';
import Dashboard from './components/pages/admin/dashboard';
import Table from './components/pages/admin/table';
import News from './components/pages/admin/news';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/whatwedo' element={<WhatWeDo/>}/>
      <Route path='/topic' element={<Topic/>}/>

      <Route path='admin/' element={<Dashboard/>}/>
      <Route path='admin/table' element={<Table/>}/>
      <Route path='admin/news' element={<News/>}/>
    </Routes>
    </div>
  );
}

export default App;
