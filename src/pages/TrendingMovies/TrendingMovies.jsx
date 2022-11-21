import PropTypes from 'prop-types';

import React, { useEffect, useState} from "react";
import {Link} from 'react-router-dom'

export default function TrendingMovies({text}) {

    let [titleMovies, setTitleMovies] = useState("");
    

    useEffect(() => {
    const mediaType = 'all'
    const timeWindow = 'day'
    const KEY = '3ec430a354e7116e3d9f9a41b82b2275'
       
        const fetchTrendingMovies = async () => {
            try {
            const dataApi = await fetch(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${KEY}`)
            const data = await dataApi.json()
            return setTitleMovies(data.results)
        } catch (error) {
            console.log("Что то не так в функции запроса популярных фильмов")
            console.log(error.message)
        }}
        fetchTrendingMovies()
  
    
    }, []);

    return (
        <div>
            <h1>{text}</h1>
            <ul>
            {titleMovies && titleMovies.map(movie => {
                return <li key={movie.id}>
                    <Link to={`movies/${movie.id}`}>
                    {movie.name || movie.title}
                    </Link></li>
            })}
            </ul>
        </div>
    )
}

TrendingMovies.propTypes = {
    text: PropTypes.string.isRequired
  };