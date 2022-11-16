import "./App.css";

import Footer from "./components/CardFooter";
import Main from "./components/CardBody";
import CardHeader from "./components/CardHeader";

function App() {
	return (
		// for className we are using BEM means parent__child--type
		
		<div className="card--wrapper">
			<div className="card">
				<CardHeader />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
