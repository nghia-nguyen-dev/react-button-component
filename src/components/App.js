import React from "react";
import Button from "components/Button"

const App = () => {
	return (
		<div className="App">
			<h1>Buttons</h1>
			<div>
				<Button>Default</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="text">Text</Button>
				<Button icon="cart-left">Icon</Button>
			</div>
		</div>
	);
};

export default App;
