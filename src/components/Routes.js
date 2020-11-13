import React from 'react'
import { Route } from "react-router-dom";
import ListViewOutline from '../movieList/ListViewOutline';
import DetailViewOutline from '../movieDetail/DetailViewOutline';
import { Switch } from "react-router-dom";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={ListViewOutline} />
            <Route path="/:movieId" exact component={DetailViewOutline} />
            <Route path="/" render={() => <div>404</div>} />
        </Switch>
    )
}
