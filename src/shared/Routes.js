import React from "react";
import { Switch, Route } from "react-router-dom";
import DetailOutline from "../movieDetail/DetailOutline";
import MovieList from "../movieList/MovieList";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MovieList} />
      <Route path="/:movieId" exact component={DetailOutline} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  );
}
