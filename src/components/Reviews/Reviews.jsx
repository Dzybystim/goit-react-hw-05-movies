import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import { useState, useEffect} from "react";

export default function Reviews() {
    const {movieId} = useParams()

    let [reviews, setReviews] = useState(null)
    const KEY = '3ec430a354e7116e3d9f9a41b82b2275'

    useEffect(() => {
        const fetchReviews = async () => {
         try{
            const dataApi = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
            const data = await dataApi.json()
            return setReviews(data.results)
         }catch(error) {
            console.log("Ошибка в fetchReviews");
            console.log(error.message);
         }
        }
        fetchReviews()
    }, [movieId])

    if(!reviews){
        return null
    }
    if(reviews.length === 0){
        return <h3>We don't have any reviews for this movie.</h3>
    }


    return <div>
        <ul>
            {reviews.map(({author, content, id}) => {
                return <li key={id}>
                    <h3>Author: {author}</h3>
                    <p>{content}</p>
                </li>
            })}
        </ul>
    </div>
}

Reviews.propTypes = {
    state: PropTypes.object.isRequired
}