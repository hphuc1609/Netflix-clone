import React from 'react';
import { useSelector } from 'react-redux';

import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';
import SearchMovies from '~/components/SearchMovies/SearchMovies';

function Search() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <SearchMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
        </div>
    );
}

export default Search;
