import { useSelector } from 'react-redux';
import Footer from '~/components/Footer/Footer';
import DramaMovies from '~/components/LayoutMovies/DramaMovies';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';

function Action() {
    const { movieDetails } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <DramaMovies />
            <MoviesDetail movie={movieDetails} showModal={movieDetails ? true : false} />
            <Footer />
        </div>
    );
}

export default Action;
