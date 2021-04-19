import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
	min-width: 88px;
	margin: 16px;
	text-align: center;
	color: #3f3f3f;
	font-size: 14px;
	padding: 8px 16px;
	border: none;
	background: #e0e0e0;
	box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
	border-radius: 6px;
	&:hover {
		background: #aeaeae;
	}

	// VARIATIONS
	${({ variant }) => {
		switch (variant) {
			case "outline":
				return css`
					color: #3d5afe;
					border: 1px solid #3d5afe;
					background: none;
					&:hover {
						background: rgba(41, 98, 255, 0.1);
					}
				`;
			case "text":
				return css`
					color: #3d5afe;
					background: none;
					&:hover {
						border: 1px solid #3d5afe;
						background: rgba(41, 98, 255, 0.1);
					}
				`;
		}
	}}
`;

const App = () => {
	return (
		<div className="App">
			<h1>Buttons</h1>
			<div>
				<Button>Default</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="text">Text</Button>
				<Button>Default</Button>
			</div>
		</div>
	);
};

export default App;
