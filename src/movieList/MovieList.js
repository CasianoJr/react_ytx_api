import React, { useState, useEffect } from "react";
import EmptyData from "../shared/EmptyData";
import { Pagination } from "antd";
import { useSearch } from "../shared/SearchProvider";
import MovieView from "./MovieView";

export default function MovieList() {
  const {
    endPoints,
    setEndPoints,
    setSearchLoading,
    fetchMovieList,
    searchLoading,
  } = useSearch();
  const [movies, setMovies] = useState([]);
  const [movieCount, setMovieCount] = useState({});

  useEffect(() => {
    const url = `list_movies.json?`;
    const fetchList = async () => {
      try {
        const response = await fetchMovieList(url);
        setSearchLoading(false);
        setMovies(response.data.data.movies);
        setMovieCount(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    setSearchLoading(true);
    fetchList();
  }, [fetchMovieList, setSearchLoading, endPoints]);

  const onChange = (page) => {
    setEndPoints((rest) => {
      return { ...rest, page: page };
    });
  };
  return (
    <div>
      {movies && movieCount ? (
        <>
          <div className="card-deck text-center mx-sm-3">
            {movies.map((movie, idx) => (
              <MovieView key={idx} movie={movie} />
            ))}
          </div>

          <Pagination
            style={{ display: searchLoading ? "none" : "" }}
            total={movieCount.movie_count}
            showTotal={(total) => `Total ${total} items`}
            defaultPageSize={endPoints.limit}
            defaultCurrent={3}
            current={endPoints.page}
            onChange={(page) => onChange(page)}
            responsive={true}
            showTitle={false}
            hideOnSinglePage={true}
            className="mx-auto text-center bg-white col-lg-8 rounded py-2 font-weight-bold"
          />
        </>
      ) : (
        <EmptyData />
      )}
    </div>
  );
}
