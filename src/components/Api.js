import { useState, useEffect } from 'react'
import Axios from 'axios';

export const api = Axios.create({
    baseURL: "https://yts.mx/api/v2/",
})

export default function Api({ urlRequest, state, setState }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(urlRequest)
                .catch((err) => console.log(err));
            if (response) {
                setData(response.data.data);
                setState(rest => { return { ...rest, searchLoading: false } })
            }
            else {
                setData(null)
                setState(rest => { return { ...rest, searchLoading: false } })
                console.log("https://yts.mx/api/v2/" + urlRequest)
            }
            // console.log(response.data)
            // console.log("https://yts.mx/api/v2/" + urlRequest)
            // console.log("Counts: ", response.data.data.movie_count)
        }
        fetchMovies();
    }, [setState, state.searchLoading, urlRequest])
    return (
        [data]
    )
}

// Have to write it differently: multiple rendering happen when api called is called again


export function ApiSuggestions(urlRequest) {
    const [suggestions, setSuggestions] = useState()
 
    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(urlRequest)
                .catch((err) => console.log(err));
            if (response) {
                setSuggestions(response.data.data);
            }
            else {
                setSuggestions(null)
                console.log("https://yts.mx/api/v2/" + urlRequest)
            }
            // console.log(response)
        }
        fetchMovies();
    }, [urlRequest])
    
    return (
        suggestions
    )
}
