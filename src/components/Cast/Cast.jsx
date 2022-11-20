import {useParams} from 'react-router-dom'
import { useState, useEffect} from "react";
import {LayoutImage, Image, CastBox, LiCast} from './Cast.styled'

export default function Cast() {
    const {movieId} = useParams()

   let [casts, setCast] = useState(null)

    const KEY = '3ec430a354e7116e3d9f9a41b82b2275'
    const pathPoster = 'https://image.tmdb.org/t/p/'
    const sizePoster = 'original'

    useEffect(() => {
        const fetchCast = async () => {
         try{
            const dataApi = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-U`)
            const data = await dataApi.json()
            return setCast(data.cast)
         }catch(error) {
            console.log("Ошибка в fetchCast");
            console.log(error.message);
         }
        }
        fetchCast()
    }, [movieId])

    if(!casts){
        return null
    }

    if(casts.length === 0){
        return <h3>We don't have any cast for this movie.</h3>
    }

    return <div>
        <CastBox>
        {casts.map(({character, name, profile_path}) => {
            return <LiCast key={name}>
              <h3>Character - {character}</h3>
              <p>Name - {name}</p>
              <LayoutImage>
              <Image alt={name} src={profile_path && `${pathPoster}${sizePoster}${profile_path}`} />
              </LayoutImage>
            </LiCast>
        })}
        </CastBox>
    </div>
}