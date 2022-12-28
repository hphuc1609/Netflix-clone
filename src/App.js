import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Action from '~/components/Contents/Pages/Action';
import Horror from '~/components/Contents/Pages/Horror';
import Romantic from '~/components/Contents/Pages/Romantic';
import Anime from '~/components/Contents/Pages/Anime';
import Fiction from '~/components/Contents/Pages/Fiction';
import Drama from '~/components/Contents/Pages/Drama';
import TvShows from '~/components/Contents/Pages/TvShows';
import Home from '~/components/Contents/Pages/Home';
import Search from '~/components/Contents/Pages/Search';
import Navbar from '~/components/Navbar/Navbar';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/action" element={<Action />} />
                    <Route path="/horror" element={<Horror />} />
                    <Route path="/romantic" element={<Romantic />} />
                    <Route path="/anime" element={<Anime />} />
                    <Route path="/fiction" element={<Fiction />} />
                    <Route path="/drama" element={<Drama />} />
                    <Route path="/tvshows" element={<TvShows />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
