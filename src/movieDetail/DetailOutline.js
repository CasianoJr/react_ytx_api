import React, { useState, useEffect } from "react";
import EmptyData from "../shared/EmptyData";
import { useSearch } from "../shared/SearchProvider";
import DetailView from "./DetailView";

export default function DetailOutline(props) {
  const { fetchMovie, setSearchLoading } = useSearch();
  const movie_id = props.match.params.movieId;
  const [movie, setMovie] = useState(null);
  const [urlRequest, setUrlRequest] = useState(
    `movie_details.json?movie_id=${movie_id}&with_images=true&with_cast=true`
  );

  useEffect(() => {
    setUrlRequest(
      `movie_details.json?movie_id=${movie_id}&with_images=true&with_cast=true`
    );
  }, [movie_id]);

  useEffect(() => {
    const fetchMovieInstance = async () => {
      try {
        const response = await fetchMovie(urlRequest);
        setSearchLoading(false);
        setMovie(response.data.data.movie);
      } catch (err) {
        console.log(err);
      }
    };
    setSearchLoading(true);
    fetchMovieInstance();
  }, [urlRequest, fetchMovie, setSearchLoading]);

  return <>{movie ? <DetailView movie={movie} /> : <EmptyData />}</>;
}
