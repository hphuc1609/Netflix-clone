import { useSelector } from 'react-redux';

import Intro from '~/components/Intro/Intro';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';
import Contents from '~/components/Contents/Contents';
import { useEffect, useState } from 'react';

function Home() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    const [showMovieDetail, getShowMovieDetail] = useState(false);

    useEffect(() => {
        getShowMovieDetail(movieDetails ? true : false);
    }, [movieDetails]);

    return (
        <div>
            <Intro />
            <Contents />
            <MoviesDetail movie={movieDetails} showModal={showMovieDetail} />
        </div>
    );
}

export default Home;
