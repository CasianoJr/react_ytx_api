import React, { useState, createContext, useContext, useCallback } from "react";
import { defaultEndPoints } from "./DefaultEndPoints";
import { Api } from "./Api";

export const SearchContext = createContext(null);

export function useSearch() {
  return useContext(SearchContext);
}

export default function SearchProvider(props) {
  const [endPoints, setEndPoints] = useState(defaultEndPoints);
  const [searchLoading, setSearchLoading] = useState(true);

  const fetchMovieList = useCallback(
    (url) => {
      return Api.get(url, { params: endPoints });
    },
    [endPoints]
  );

  const fetchMovie = useCallback((url) => {
    return Api.get(url);
  }, []);

  const value = {
    searchLoading,
    endPoints,
    setSearchLoading,
    setEndPoints,
    fetchMovieList,
    fetchMovie,
  };

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
}
