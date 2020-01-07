import React from 'react'
import {MovieItem} from './MovieItem'

export const MovieList = ({movies}) => {

    return (
        <div className="row">
            {movies.map(movie => <MovieItem key={movie.id}{...movie} />)} 
        </div>
    )

}