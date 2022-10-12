import "./App.css";
import Card from "./components/card/Card";
import { languages as data } from "./helpers/data";
import react from "./assets/react.svg";

function App() {
    return (
        <>
            <div className="image">
                <img src={react} alt="" />
            </div>
            <div className="languages">
                <h2 className="title">Languages</h2>
                <div className="cards">
                    {data.map((item) => (
                        <Card key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
