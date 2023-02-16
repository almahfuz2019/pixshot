
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Photos from './Components/Photos';
import NavbarForPc from './Components/Shired/NavbarForPc';
import Videos from './Components/Videos';
import ImageDetails from './Components/ImageDetails';
import Footer from './Components/Shired/Footer';
import SoundEffect from './Components/SoundEffect';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <NavbarForPc/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Photos/>}/>
          <Route path="videos" element={<Videos/>}/>
          <Route path="sound-effect" element={<SoundEffect/>}/>
        </Route>
          <Route path='/photo/:id' element={<ImageDetails/>}/>
          <Route path="*" element={NotFound}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
