
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home';
import AboutUs from './components/pages/home/aboutus';
import WhatWeDo from './components/pages/home/whatwedo';
import Topic from './components/pages/home/topic';
import Dashboard from './components/pages/admin/dashboard';
import NewsDetail from './components/pages/home/newsdetail';
import ProjectDetail from './components/pages/home/projectdetail';
import Projects from './components/pages/admin/projects';
import CreateProject from './components/pages/admin/createproject';
import Staff_project from './components/pages/staff/staff_projects';
import NewsAll from './components/pages/home/news';
import NewsList from './components/pages/admin/news';
import EditProjects from './components/pages/admin/editproject';
import CreateNews from './components/pages/admin/createnews';
import EditNews from './components/pages/admin/editnews';
import ListDonate from './components/pages/admin/listdonate';
import Donatedetail from './components/pages/admin/donatedetail';
import Staff_detailproject from './components/pages/staff/staff_detailproject';
import DetailProject from './components/pages/admin/detailproject';
import Staff_createproject from './components/pages/staff/staff_createproject';
import Staff_news from './components/pages/staff/staff_news';
import Staff_editnews from './components/pages/staff/staff_editnews';
import Donate from './components/pages/home/donate';
import DetailNews from './components/pages/admin/detailnews';
import Staff_editproject from './components/pages/staff/staff_editproject';
import Staff_detailNews from './components/pages/staff/staff_detailnews';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/whatwedo' element={<WhatWeDo/>}/>
      <Route path='/topic' element={<Topic/>}/>
      <Route path='/news' element={<NewsAll/>}/>
      <Route path='/newsdetail/:id' element={<NewsDetail/>}/>
      <Route path='/projectdetail/:id' element={<ProjectDetail/>}/>
      <Route path='/donate' element={<Donate/>}/>


      

      <Route path='admin/' element={<Dashboard/>}/>
      <Route path='admin/projects' element={<Projects/>}/>
      <Route path='admin/news' element={<NewsList/>}/>
      <Route path='admin/createproject' element={<CreateProject/>}/>
      <Route path='admin/editproject' element={<EditProjects/>}/>
      <Route path='admin/createnews' element={<CreateNews/>}/>
      <Route path='admin/editnews' element={<EditNews/>}/>
      <Route path='admin/listdonate' element={<ListDonate/>}/>
      <Route path='admin/donatedetail' element={<Donatedetail />}/>
      <Route path='admin/detailproject/:id' element={<DetailProject />}/>
      <Route path='admin/detailnews/:id' element={<DetailNews />}/>


      <Route path='staff/projects' element={<Staff_project/>}/>
      <Route path='staff/detailproject/:id' element={<Staff_detailproject/>}/>
      <Route path='staff/detailnews/:id' element={<Staff_detailNews/>}/>
      <Route path='staff/createproject' element={<Staff_createproject/>}/>
      <Route path='staff/editproject/:id' element={<Staff_editproject/>}/>
      <Route path='staff/editnews/:id' element={<Staff_editnews/>}/>
      <Route path='staff/news' element={<Staff_news/>}/>



    </Routes>
    </div>
  );
}

export default App;
