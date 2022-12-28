import { useSelector } from 'react-redux';
import Footer from '~/components/Footer/Footer';
import TvShows from '~/components/LayoutMovies/TvShows';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';

function Action() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <TvShows />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Action;
