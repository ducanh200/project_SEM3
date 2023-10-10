
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import AboutUs from './components/pages/aboutus';

function App() {
  return (
    <div className="App" >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
    </Routes>
    </div>
  );
}

export default App;
