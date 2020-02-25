import React, { useState } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/movies/:id">
          <Movie items={Movie} />
        </Route>
        <Route path="/" component={MovieList} />
      </Switch>
    </div>
  );
};

export default App;
