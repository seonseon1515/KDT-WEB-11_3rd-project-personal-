import React from 'react';
import '../css/App.css';
import '../css/Variables.scss';

// routes
import NativePage from './NativePage';
import Page3 from './Study';
import Study from './Study';
import Page4 from './Page4';
import MainPage from './MainPage';
import Header from '../components/Header';
import HeaderVertical from '../components/HeaderVertical';
import NativeProfilePage from './NativeProfilePage';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function App() {
  return (
      <div>
        <div className="App">
          <BrowserRouter>
            <Header />
            <HeaderVertical />  
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/native' element={<NativePage />}/>
              <Route path="/speaking" element={<Page3 />} />
              <Route path="/study" element={<Study />} />
              <Route path="/QnA" element={<Page4 />} />
            
              <Route path='/native/:profile' element={<NativeProfilePage />} />
            </Routes>
          </BrowserRouter> 
        </div>
      </div>
  );
}

export default App;
