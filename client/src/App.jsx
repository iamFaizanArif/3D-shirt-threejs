import Canvas from "./canvas/index.jsx";
import Customizer from "./pages/Customizer.jsx";
import Home from "./pages/Home.jsx";
import CanvasModel from "./canvas/index.jsx";

function App() {

    return (
        <main className="app  transition-all ease-in">
            <Home/>
            <CanvasModel/>
            <Customizer/>
        </main>
    )
}

export default App
