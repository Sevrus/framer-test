import './App.css';
import CardOne from "./components/cardOne/CardOne.jsx";
import Box1 from "./components/box1/Box1.jsx";
import Box2 from "./components/box2/Box2.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import CardListChoupette from "./components/testChoupette/CardListChoupette.jsx";

function App() {

    return (
        <div className="App">
            <section>
                {/*<CardOne />*/}
                {/*<Box1 />*/}
                {/*<Box2 />*/}
                {/*<Carousel />*/}
                <CardListChoupette/>
            </section>
        </div>
    )
}

export default App
