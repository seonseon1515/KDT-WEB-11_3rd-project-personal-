import React from 'react';
import '../css/App.css';
import '../css/common_css/Variables.scss';

// routes
import NativePage from './NativePage';
import CourseIntroPage from './CourseIntroPage';
import Study from './Study';
import Page4 from './Page4';
import MainPage from './MainPage';
import Header from '../components/Header';
import HeaderVertical from '../components/HeaderVertical';
import NativeProfilePage from './NativeProfilePage';
// introduce 소개 상세페이지
import Intro_Discuss from './introduce_page/Intro_Discuss';
import Intro_Business from './introduce_page/Intro_Business';
import Intro_Interview from './introduce_page/Intro_Interview';
import Intro_Junior from './introduce_page/Intro_Junior';
import Intro_News from './introduce_page/Intro_News';
import Intro_Opic from './introduce_page/Intro_Opic';
import Intro_Toeic from './introduce_page/Intro_Toeic';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Discuss } from '../store/NativeFilterReducer';
import Business from './introduce_page/Intro_Business';
import WriteComponent from '../components/common/WriteComponent';
import StudyPostList from '../components/study/StudyPostList';
import StudyPostDetail from '../components/study/StudyPostDetail';




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
              <Route path="/introduce" element={<Intro_Junior />} />
              <Route path="/study" element={<Study />} />
              <Route path="/QnA" element={<Page4 />} />
  
              <Route path='/native/:profile' element={<NativeProfilePage />} />

              <Route path="/introduce/business" element={<Intro_Business />} />
              <Route path="/introduce/interview" element={<Intro_Interview />} />
              <Route path="/introduce/discuss" element={<Intro_Discuss />} />
              <Route path="/introduce/news" element={<Intro_News />} />
              <Route path="/introduce/opic" element={<Intro_Opic />} />
              <Route path="/introduce/toeic" element={<Intro_Toeic />} />

              <Route path='/study/write' element={<WriteComponent />} />
              <Route path='/study/board' element={<StudyPostList />} />
              <Route path='study/post/:studyPostId' element={<StudyPostDetail />}/>
            </Routes>
          </BrowserRouter> 
        </div>
      </div>
  );
}

export default App;

