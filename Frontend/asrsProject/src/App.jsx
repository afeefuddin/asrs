import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import RealDictionary from './pages/RealDictionary';
import AdminPage from './pages/AdminPage';
import Facts from './pages/Facts';
import ResearchPage from './pages/ResearchPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <Routes>
      <Route  path='/' element={<MainPage />} />
      <Route path='/realdictionary' element={<RealDictionary />} />
      <Route path='/admin' element={<AdminPage/>} />
      <Route path='/facts' element={<Facts />} />
      <Route path='/research/papers' element={<ResearchPage />} />


    </Routes>
    
  </>
  );
}

export default App;
