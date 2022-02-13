import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/ESP/home'
import Planes from './Pages/ESP/Planes'
import Nosotros from './Pages/ESP/Nosotros'
import Blog from './Pages/ESP/Blog'
import Home2 from './Pages/ENG/home'
import Plans from './Pages/ENG/Planes'
import Aboutus from './Pages/ENG/Nosotros'
import Blog2 from './Pages/ENG/Blog'
import NoPage from 'Pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planes' element={<Planes />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/ENG' element={<Home2 />} />
          <Route path='/ENG/plans' element={<Plans />} />
          <Route path='/ENG/About-us' element={<Aboutus />} />
          <Route path='/ENG/Blog' element={<Blog2 />} />
          <Route path="/*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
        
        

  );
}

export default App;
