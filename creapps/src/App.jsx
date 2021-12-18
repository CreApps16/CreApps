import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/ESP/home'
import Planes from './Pages/ESP/Planes'
import Nosotros from './Pages/ESP/Nosotros'
import Blog from './Pages/ESP/Blog'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/planes' element={<Planes />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/Blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
        
        

  );
}

export default App;
