import React from "react";
import Button from "components/Button";

const App = () => {
	return (
		<div className="App">
			<h1>Buttons</h1>
			<div>
				<div className="flex">
					<div>
						<p className="btn-label">{`<Button/>`}</p>
						<Button>Button</Button>
					</div>
					<div>
						<p className="btn-label">{`<Button variant="outline"/>`}</p>
						<Button variant="outline">Button</Button>
					</div>

					<div>
						<p className="btn-label">{`<Button variant="text"/>`}</p>
						<Button variant="text">Button</Button>
					</div>
				</div>

				<div className="flex">
					<div>
						<p className="btn-label">{`<Button icon="cart-left"/>`}</p>
						<Button icon="cart-left">Button</Button>
					</div>

					<div>
						<p className="btn-label">{`<Button icon="cart-right"/>`}</p>
						<Button icon="cart-right">Button</Button>
					</div>
				</div>

				<div className="flex">
					<div>
						<p className="btn-label">{`<Button size="sm"/>`}</p>
						<Button size="sm">Button</Button>
					</div>
					<div>
						<p className="btn-label">{`<Button size="md"/>`}</p>
						<Button size="md">Button</Button>
					</div>
					<div>
						<p className="btn-label">{`<Button size="lg"/>`}</p>
						<Button size="lg">Button</Button>
					</div>
				</div>

				<div className="flex">
					<div>
						{" "}
						<p className="btn-label">{`<Button color="primary"/>`}</p>
						<Button color="primary">Button</Button>
					</div>
					<div>
						{" "}
						<p className="btn-label">{`<Button color="secondary"/>`}</p>
						<Button color="secondary">Button</Button>
					</div>
					<div>
						<p className="btn-label">{`<Button color="success"/>`}</p>
						<Button color="success">Button</Button>
					</div>
				</div>

				<div className="flex">
					<div>
						{" "}
						<p className="btn-label">{`<Button color="primary" size="lg"/>`}</p>
						<Button color="primary" size="lg">Button</Button>
					</div>
					<div>
						{" "}
						<p className="btn-label">{`<Button color="secondary" size="md" icon="cart-left"/>`}</p>
						<Button color="secondary" size="md" icon="cart-left">Button</Button>
					</div>
				
				</div>



			</div>
		</div>
	);
};

export default App;
