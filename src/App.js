import './App.css';
import Navbar from '~/components/Navbar/Navbar';
import Intro from '~/components/Intro/Intro';
import Contents from '~/components/Content/Contents';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Contents />
        </div>
    );
}

export default App;
