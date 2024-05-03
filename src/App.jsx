import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nowplaying from './components/Nowplaying.jsx';
import Toprated from './components/Toprated.jsx';
import Upcoming from './components/Upcoming.jsx';
import Popular from './components/Popular.jsx';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import NotFound from './components/NotFound.jsx';

const App = () =>{
  
        
    return (
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/nowplaying' element={<Nowplaying />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/toprated' element={<Toprated />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/' element={<Welcome />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      
      
    );
  }
  
  

export default App;
