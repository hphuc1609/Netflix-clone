import { useSelector } from 'react-redux';
import ActionMovies from '~/components/LayoutMovies/ActionMovies';
import Footer from '~/components/Footer/Footer';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';

function Action() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <ActionMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Action;
