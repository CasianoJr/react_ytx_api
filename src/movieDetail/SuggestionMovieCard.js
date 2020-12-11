import { Image } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../shared/SearchProvider";

export default function SuggestionMovieCard({ movieId }) {
  const urlRequest = `/movie_suggestions.json?movie_id=${movieId}`;
  const { fetchMovie } = useSearch();
  const [movies, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieSuggestioins = async () => {
      try {
        const response = await fetchMovie(urlRequest);
        setMovie(response.data.data.movies);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovieSuggestioins();
  }, [fetchMovie, urlRequest]);

  return (
    <div className="col-md-4 col-sm-6 mx-auto shadow-lg rounded">
      <div className="row">
        {movies && (
          <>
            {movies.map((movie) => (
              <div className="col-6 text-center" key={movie.id}>
                <Link to={movie.id.toString()}>
                  <div className="mx-2 px-3">
                    <Image src={movie.medium_cover_image} />
                  </div>
                  <div>{movie.title} </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
