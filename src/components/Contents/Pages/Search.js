import React from 'react';
import { useSelector } from 'react-redux';

import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';
import SearchMovies from '~/components/SearchMovies/SearchMovies';
import Footer from '~/components/Footer/Footer';

function Search() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <SearchMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Search;
