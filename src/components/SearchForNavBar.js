import React, { createContext, useContext } from 'react'
import { Input } from 'antd';
import { ExpandOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
const { Search } = Input;

const SearchForNavBar = () => {
    const { state, setState } = useContext(SearchContext)
    let history = useHistory()

    const onSearch = query => {
        setState(rest => { return { ...rest, query_term: query, searchLoading: true, page: 1, quality: "", minimum_rating: "", genre: "", with_rt_ratings: "", sort_by: "", order_by: "", } });
        history.push("/")
    }
    return (
        <>
            <div className="btn mb-1" type="button" data-toggle="collapse" data-target="#detailedSearch" aria-controls="detailedSearch" aria-expanded="false" aria-label="Toggle navigation">
                <ExpandOutlined className="text-white" />
            </div>
            <Search
                placeholder="Search Movies"
                allowClear
                onSearch={onSearch}
                className="mr-auto"
                style={{ width: 300, margin: '0 10px' }}
                loading={state.searchLoading}
            />
        </>
    )
}
export default SearchForNavBar;

const endPoints = {
    limit: 20, page: 1, quality: "", minimum_rating: "", query_term: "",
    genre: "", sort_by: "", order_by: "", with_rt_ratings: "", searchLoading: true,
};

export const SearchContext = createContext(endPoints);