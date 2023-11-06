
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home';
import AboutUs from './components/pages/home/aboutus';
import WhatWeDo from './components/pages/home/whatwedo';
import Topic from './components/pages/home/topic';
import Dashboard from './components/pages/admin/dashboard';
import NewsDetail from './components/pages/home/newsdetail';
import ProjectDetail from './components/pages/home/projectdetail';
import Projects from './components/pages/admin/projects';
import CreateProjects from './components/pages/admin/createproject';
import Staff_project from './components/pages/staff/staff_projects';
<<<<<<< HEAD
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
import Staff_editproduct from './components/pages/staff/staff_editproduct';

=======
import Staff_detail from './components/pages/staff/staff_detail';
import EditProjects from './components/pages/admin/editproject';
import CreateNews from './components/pages/admin/createnews';
import EditNews from './components/pages/admin/editnews';
>>>>>>> 3e1af5257ee227e3c56b1db865a929681eac83a2


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/whatwedo' element={<WhatWeDo/>}/>
      <Route path='/topic' element={<Topic/>}/>
      <Route path='/news' element={<NewsAll/>}/>
      <Route path='/newsdetail' element={<NewsDetail/>}/>
      <Route path='/projectdetail' element={<ProjectDetail/>}/>


      

      <Route path='admin/' element={<Dashboard/>}/>
      <Route path='admin/projects' element={<Projects/>}/>
<<<<<<< HEAD
      <Route path='admin/news' element={<NewsList/>}/>
      <Route path='admin/createproject' element={<CreateProject/>}/>
      <Route path='admin/editproject' element={<EditProjects/>}/>
      <Route path='admin/createnews' element={<CreateNews/>}/>
      <Route path='admin/editnews' element={<EditNews/>}/>
      <Route path='admin/listdonate' element={<ListDonate/>}/>
      <Route path='admin/donatedetail' element={<Donatedetail />}/>
      <Route path='admin/detailproject' element={<DetailProject />}/>
=======
      <Route path='admin/news' element={<News/>}/>
      <Route path='admin/createproject' element={<CreateProjects/>}/>
      <Route path='admin/editproject' element={<EditProjects/>}/>
      <Route path='admin/createnews' element={<CreateNews/>}/>
      <Route path='admin/editnews' element={<EditNews/>}/>
>>>>>>> 3e1af5257ee227e3c56b1db865a929681eac83a2


      <Route path='staff/projects' element={<Staff_project/>}/>
      <Route path='staff/detail' element={<Staff_detailproject/>}/>
      <Route path='staff/createproject' element={<Staff_createproject/>}/>
      <Route path='staff/editproject' element={<Staff_editproduct/>}/>



    </Routes>
    </div>
  );
}

export default App;
