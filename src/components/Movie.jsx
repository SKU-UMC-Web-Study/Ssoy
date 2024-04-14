import React from 'react'


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
function Movie ({title, poster_path, vote_average, id, overview}) {
  return (
    //movie components내 view 작업 진행 
    
    <div className='movie-container'>
        <img src={IMG_BASE_URL + poster_path} alt = "영화포스터"/>
        <div className="overview-con">
            <p>{title}</p>
            <p className="overview">{overview}</p>
        </div>

        <div className='movie-info'>
            <h4>{title}</h4>
            <span>{vote_average}</span>
            <p>
                {id}
            </p>
            
        </div>
        
    </div>
    
  )
}

export default Movie;