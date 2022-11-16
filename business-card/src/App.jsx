import "./App.css";
import Card from "./Card";

function App() {
	return (
		// for className we are using BEM means parent__child--type
		<div className="container">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

export default App;
