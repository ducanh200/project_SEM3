
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home';
import AboutUs from './components/pages/home/aboutus';
import WhatWeDo from './components/pages/home/whatwedo';
import Topic from './components/pages/home/topic';
import Dashboard from './components/pages/admin/dashboard';
import News from './components/pages/admin/news';
import NewsDetail from './components/pages/home/newsdetail';
import ProjectDetail from './components/pages/home/projectdetail';
import Projects from './components/pages/admin/projects';
import CreateProject from './components/pages/admin/createproject';
import Staff_project from './components/pages/staff/staff_projects';
import Staff_detail from './components/pages/staff/staff_detail';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/whatwedo' element={<WhatWeDo/>}/>
      <Route path='/topic' element={<Topic/>}/>
      <Route path='/newsdetail' element={<NewsDetail/>}/>
      <Route path='/projectdetail' element={<ProjectDetail/>}/>


      

      <Route path='admin/' element={<Dashboard/>}/>
      <Route path='admin/projects' element={<Projects/>}/>
      <Route path='admin/news' element={<News/>}/>
      <Route path='admin/createproject' element={<CreateProject/>}/>


      <Route path='staff/projects' element={<Staff_project/>}/>
      <Route path='staff/detail' element={<Staff_detail/>}/>


    </Routes>
    </div>
  );
}

export default App;
