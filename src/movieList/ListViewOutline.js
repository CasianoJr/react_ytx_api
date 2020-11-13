import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../components/SearchForNavBar';
import ContentList from './ContentList'
import EmptyData from '../components/EmptyData';
import { Pagination } from 'antd';
import Api from '../components/Api';

// const endPoints = {
//     limit: 20, page: 1, quality: "", minimum_rating: "", query_term: "",
//     genre: "", sort_by: "", order_by: "", with_rt_ratings: "", searchLoading: true,
// };

export default function ListOutline({ history }) {
    const { state, setState } = useContext(SearchContext);
    const [urlRequest, setUrlRequest] = useState("list_movies.json?");
    const [data] = Api({ urlRequest, state, setState });
    const [movies, setMovies] = useState()

    useEffect(() => {
        let string = "list_movies.json?";
        Object.entries(state).forEach(([key, value]) => {
            if (key !== "searchLoading" && value !== "") {
                string += key + "=" + value + "&"
            }
        })
        setUrlRequest(string)
    }, [state])

    // useEffect(() => {
    //     setState(endPoints)
    // }, [setState])

    useEffect(() => {
        data ? setMovies(data.movies) : setMovies(null)
    }, [setMovies, data])


    const onChange = page => {
        setState((rest) => { return { ...rest, page: page } })
    }
    return (
        <div>
            {movies ? <>
                <div className="card-deck mx-sm-2 text-center">
                    {movies.map((movie, idx) => <ContentList key={idx} movie={movie} />)}
                </div>
                {data.movie_count &&
                <Pagination
                total={data.movie_count}
                showTotal={total => `Total ${total} items`}
                defaultPageSize={state.limit}
                defaultCurrent={3}
                current={state.page} 
                onChange={onChange}
                className="mx-auto text-center bg-white col-lg-8 rounded py-2 font-weight-bold"
                responsive={true}
                />
            }
                
            </>
                : <EmptyData />
            }

        </div>
    )
}
