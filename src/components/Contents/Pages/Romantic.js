import { useSelector } from 'react-redux';
import RomanticMovies from '~/components/LayoutMovies/RomanticMovies';
import Footer from '~/components/Footer/Footer';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';

function Action() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <RomanticMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Action;
