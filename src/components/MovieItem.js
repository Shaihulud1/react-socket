import React from 'react'

export const MovieItem = (movie) => {
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src="/images/movie.png" />
                    <a className="btn-floating halfway-fab waves-effect waves-light red" href={`/detail/${movie.id}`}>
                        <img src={movie.picture || "/images/play.jpg"} />
                    </a>
                </div>
                <div className="card-content">
                    <p>{movie.name}</p>
                </div>
            </div>            
        </div>
    )
}