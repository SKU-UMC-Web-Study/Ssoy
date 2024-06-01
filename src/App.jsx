import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nowplaying from './components/Nowplaying';
import Toprated from './components/Toprated';
import Upcoming from './components/Upcoming';
import Popular from './components/Popular';
import Header from './components/Header';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';
import Moviedetail from './components/Moviedetail';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/nowplaying' element={<Nowplaying />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/toprated' element={<Toprated />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/' element={<Welcome />} />
        <Route path='/movies/:id' element={<Moviedetail />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
