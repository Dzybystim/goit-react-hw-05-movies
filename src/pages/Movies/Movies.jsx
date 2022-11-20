import React, { useState, useEffect } from "react";
import { NavItem} from "./Movies.styled"
import {useSearchParams} from 'react-router-dom'
import SearchForm from 'components/SearchForm/SearchForm'

export default function Movies() {


let [titleMovies, setTitleMovies] = useState("");
const [searchParams, setSearchParams] = useSearchParams()
const filter = searchParams.get('filter') ?? '';


useEffect(() => {
    if(filter === "") return

    const fetchSearchMovies = async () => {
        try{
        const KEY = '3ec430a354e7116e3d9f9a41b82b2275'
        
        const dataApi = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${filter}&page=1&include_adult=false`)
        const data = await dataApi.json()
        return setTitleMovies(data.results)
        }catch(error){
            console.log(error.message)
            console.log('Что то не так в fetchSearchMovies')
        }
    }
    
    fetchSearchMovies()
}, [filter])


const onSubmitSearch = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({filter: form.elements.movie.value})
    form.reset();
}






    return <>
    <SearchForm 
    onSubmitSearch={onSubmitSearch}
    />
    <ul>
        {titleMovies && titleMovies.map(({id, name, title}) => {
        return <li key={id}>
            <NavItem to={`${id}`}> {name || title} </NavItem>
            </li>
        })}
    </ul>
    </>
}