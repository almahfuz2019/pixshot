
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Photos from './Components/Photos';
import NavbarForPc from './Components/Shired/NavbarForPc';
import Videos from './Components/Videos';
import ImageDetails from './Components/ImageDetails';

function App() {
  return (
    <div>
      <NavbarForPc/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Photos/>}/>
          <Route path="videos" element={<Videos/>}/>
        </Route>
          <Route path='/photo/:id' element={<ImageDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
