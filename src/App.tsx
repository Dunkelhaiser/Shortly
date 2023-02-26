/* eslint-disable jsx-a11y/anchor-is-valid */
import Boost from "./components/Boost/Boost";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./scss/styles.scss";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Boost />
            </main>
        </>
    );
}

export default App;
