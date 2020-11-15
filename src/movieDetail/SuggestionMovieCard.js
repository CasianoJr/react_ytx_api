import { Image } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ApiSuggestions } from '../components/Api'

export default function SuggestionMovieCard({ movieId }) {
    const urlRequest = `/movie_suggestions.json?movie_id=${movieId}`
    const suggestions = ApiSuggestions(urlRequest)
    const [movies, setMovie] = useState(null)
    console.log(movies)

    useEffect(() => {
        if (suggestions) {
            setMovie(suggestions.movies)

        }
        else {
            setMovie(null)
        }
    }, [suggestions, setMovie])

    return (
        <div className="col-md-4 col-sm-6 mx-auto shadow-lg rounded">
            <div className="row">
                {movies && <>
                    {movies.map((movie) =>
                        <div className="col-6 text-center" key={movie.id}>
                            <Link to={movie.id.toString()}>
                                <div className="mx-2 px-3">
                                    <Image src={movie.medium_cover_image} />
                                </div>
                                <div>{movie.title} </div>
                            </Link>
                        </div>
                    )} </>
                }
            </div>
        </div>
    )
}
