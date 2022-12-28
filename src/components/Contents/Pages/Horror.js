import { useSelector } from 'react-redux';
import HorrorMovies from '~/components/LayoutMovies/HorrorMovies';
import Footer from '~/components/Footer/Footer';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';

function Action() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <HorrorMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Action;
