import {useParams} from 'react-router-dom'
import React, { useEffect, useState} from "react";
import {LayoutImage, Image, MainDetailsMovie, LayotImageDescription} from "./MovieDetails.styled"
import AditionalInformation from 'components/AditionalInformation/AditionalInformation'

export default function MovieDetails() {
    const {movieId} = useParams()
    const pathPoster = 'https://image.tmdb.org/t/p/'
    const sizePoster = 'original'
    const KEY = '3ec430a354e7116e3d9f9a41b82b2275'

    let [dataMovie, setDataMovie] = useState('')
   
    useEffect(() => {
        const fetchDetailsMovies = async () => {
            try{
            
            const dataApi = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`)
            const data = await dataApi.json()
            return setDataMovie(data)
        }catch(error){
        console.log(error.message)
        console.log('Ошибка в fetchDetailsMovies')
        }} 
        fetchDetailsMovies()
    }, [movieId])

    function processingReleasedYear(release_date, first_air_date) {
        if (release_date) {
            let ReleasedData = release_date.split('');
            return ReleasedData.splice(0, 4).join('');
          } else if (first_air_date) {
            let ReleasedData = first_air_date.split(''); 
            return ReleasedData.splice(0, 4).join('');
          } else {
            return '';
          }
    }

    function processingVoteAverage(vote_average) {
        if (vote_average) {
          return vote_average.toFixed(1)*10;
        } else {
          return '0';
        }
      }

    function processingGenre(genres) {
        let genre = [];
    if(genres){
        genres.map(({name}) => {
         return   genre.push(`${name} `);
        })}
        return genre
      }



    let {poster_path, title, name, release_date, first_air_date, vote_average, overview, genres} = dataMovie

    return <>
        <MainDetailsMovie>
        <LayoutImage>
        <Image src={poster_path && `${pathPoster}${sizePoster}${poster_path}`} alt={title || name} />
        </LayoutImage>
        <LayotImageDescription>
         <h1>{`${title || name} (${processingReleasedYear(release_date, first_air_date)})`}</h1>
         <p>User Score: {processingVoteAverage(vote_average)} %</p>
         <h2>Overview</h2>
         <p>{overview || "Movie overview not found"}</p>
         <h2>Genres</h2>
         <p>{processingGenre(genres)}</p>
        </LayotImageDescription>
        </MainDetailsMovie>
        <AditionalInformation movieId={movieId}/>
    </>
}