import { useSelector } from 'react-redux';
import Footer from '~/components/Footer/Footer';
import FictionMovies from '~/components/LayoutMovies/FictionMovies';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';

function Action() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <FictionMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Action;
