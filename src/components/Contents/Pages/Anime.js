import { useSelector } from 'react-redux';
import Footer from '~/components/Footer/Footer';
import AnimeMovies from '~/components/LayoutMovies/AnimeMovies';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';

function Action() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <AnimeMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Action;
