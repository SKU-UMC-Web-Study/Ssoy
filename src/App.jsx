
import Movie from './components/Movie';
import {movies} from './components/movieDummy.js';
import './App.css'


function App() {
  return (
    <div>
      <div className = "app-container">
        {
        movies.results.map((item)=> {
          return (
          <Movie
          key={item.id}
          title = {item.title}
          poster_path = {item.poster_path}
          vote_average = {item.vote_average} 
          overview={item.overview}
          />
          

          )
        })

        }

      </div>
    </div>
  );
}

export default App;