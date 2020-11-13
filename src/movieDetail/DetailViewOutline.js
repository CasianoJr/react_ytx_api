import React, { useContext, useState, useEffect } from 'react'
import Api from '../components/Api'
import ContentDetail from './ContentDetail'
import { SearchContext } from '../components/SearchForNavBar'
import EmptyData from '../components/EmptyData';
const endPoints = { movie_id: null, with_images: true, with_cast: true, searchLoading: true }

export default function DetailViewOutline(props) {
    const movie_id = props.match.params.movieId
    const { state, setState } = useContext(SearchContext)
    const [urlRequest, setUrlRequest] = useState(`movie_details.json?movie_id=${movie_id}&with_images=${endPoints.with_images}&with_cast=${endPoints.with_cast}`)
    const [data] = Api({ urlRequest, state, setState });
    const [movie, setMovie] = useState()

    useEffect(() => {
        setUrlRequest(
            `movie_details.json?movie_id=${movie_id}&with_images=${endPoints.with_images}&with_cast=${endPoints.with_cast}`
        );
    }, [movie_id, state])

    useEffect(() => {
        data ? setMovie(data.movie) : setMovie(null)
    }, [data])

    return (
        <>
            { movie ?
                <ContentDetail movie={movie} />
                : <EmptyData />
            }
        </>
    )
}
