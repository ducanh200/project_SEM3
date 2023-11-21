
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
import Admin_Topic from './components/pages/admin/topic';
import Admin_Detailtopic from './components/pages/admin/detailtopic';
import Admin_Createtopic from './components/pages/admin/createtopic';
import Admin_Edittopic from './components/pages/admin/edittopic';
import Admin_Country from './components/pages/admin/countries';
import Admin_Detailcountry from './components/pages/admin/detailcountry';
import Admin_Createcountry from './components/pages/admin/createcountry';
import Admin_Editcountry from './components/pages/admin/editcountry';
import Staff_topic from './components/pages/staff/topics';
import Staff_detailtopic from './components/pages/staff/detailtopic';
import Staff_createtopic from './components/pages/staff/createtopic';
import Staff_edittopic from './components/pages/staff/edittopic';
import Staff_country from './components/pages/staff/countries';
import Staff_detailcountry from './components/pages/staff/detailcountry';
import Staff_createcountry from './components/pages/staff/createcountry';
import Staff_editcountry from './components/pages/staff/editcountry';
import Topic_filter_project from './components/pages/home/topicfilterproject';
import Topic_filter_news from './components/pages/home/topicfilternews';

import Staff_createnew from './components/pages/staff/createnew';
import Register from './components/pages/home/register';



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
      <Route path='/topicfilterproject/:id' element={<Topic_filter_project/>}/>
      <Route path='/topicfilternews/:id' element={<Topic_filter_news/>}/>
      <Route path='/register' element={<Register/>}/>






      

      <Route path='admin/' element={<Dashboard/>}/>
      <Route path='admin/projects' element={<Projects/>}/>
      <Route path='admin/news' element={<NewsList/>}/>
      <Route path='admin/createproject' element={<CreateProject/>}/>
      <Route path='admin/editproject/:id' element={<EditProjects/>}/>
      <Route path='admin/createnews' element={<CreateNews/>}/>
      <Route path='admin/editnews/:id' element={<EditNews/>}/>
      <Route path='admin/listdonate' element={<ListDonate/>}/>
      <Route path='admin/donatedetail/:id' element={<Donatedetail />}/>
      <Route path='admin/detailproject/:id' element={<DetailProject />}/>
      <Route path='admin/detailnews/:id' element={<DetailNews />}/>
      <Route path='admin/topics' element={<Admin_Topic/>}/>
      <Route path='admin/createtopic' element={<Admin_Createtopic/>}/>
      <Route path='admin/edittopic' element={<Admin_Edittopic/>}/>
      
      <Route path='admin/countries' element={<Admin_Country/>}/>
      <Route path='admin/createcountry' element={<Admin_Createcountry/>}/>
      <Route path='admin/editcountry' element={<Admin_Editcountry/>}/>

      <Route path='admin/listdonate' element={<ListDonate/>}/>
      <Route path='admin/donatedetail' element={<Donatedetail />}/>


      <Route path='staff/projects' element={<Staff_project/>}/>
      <Route path='staff/detailproject/:id' element={<Staff_detailproject/>}/>
      <Route path='staff/detailnews/:id' element={<Staff_detailNews/>}/>
      <Route path='staff/createproject' element={<Staff_createproject/>}/>
      <Route path='staff/editproject/:id' element={<Staff_editproject/>}/>
      <Route path='staff/editnews/:id' element={<Staff_editnews/>}/>
      <Route path='staff/news' element={<Staff_news/>}/>
      <Route path='staff/topics' element={<Staff_topic/>}/>
      <Route path='staff/detailtopic' element={<Staff_detailtopic/>}/>
      <Route path='staff/createtopic' element={<Staff_createtopic/>}/>
      <Route path='staff/edittopic' element={<Staff_edittopic/>}/>
      
      <Route path='staff/countries' element={<Staff_country/>}/>
      <Route path='staff/detailcountry' element={<Staff_detailcountry/>}/>
      <Route path='staff/createcountry' element={<Staff_createcountry/>}/>
      <Route path='staff/editcountry' element={<Staff_editcountry/>}/>

      <Route path='staff/createnew' element={<Staff_createnew/>}/>



    </Routes>
    </div>
  );
}

export default App;
