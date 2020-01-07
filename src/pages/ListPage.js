import React, {useState} from "react"
import {MovieList} from '../components/MovieList'

export const ListPage = () => {
	const [movies, setMovie] = useState([
		{ id: 1, name: 'Movie 1', picture: null },
		{ id: 2, name: 'Movie 2', picture: null },
		{ id: 3, name: 'Movie 3', picture: null },
		{ id: 4, name: 'Movie 4', picture: null },
		{ id: 5, name: 'Movie 5', picture: null },
		{ id: 6, name: 'Movie 6', picture: null },
	])

	return (
		<div className="movies-list-wrap">
			<MovieList movies={movies}/>
		</div>
	)
}
