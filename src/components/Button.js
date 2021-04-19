import styled, { css } from "styled-components";
import cart from "icons/cart.png";

export default styled.button.attrs(props => {
	return {
		disabled: true,
		className: "btn",
	};
})`
	min-width: 88px;
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

	// BORDER VARIATIONS
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

	// ICON+POS VARIATIONS
	${({ icon }) => {
		const txtColor = css`
			color: white;
		`;

		const pseudoStyles = css`
			content: url(${cart});
			transform: translateY(3px);
			display: inline-block;
		`;

		switch (icon) {
			case "cart-left":
				return css`
					&::before {
						padding-right: 5px;
						${pseudoStyles}
					}
					${txtColor}
				`;
			case "cart-right":
				return css`
					&::after {
						padding-left: 5px;
						${pseudoStyles}
					}
					${txtColor}
				`;
		}
	}}

	// SIZE VARIATION
	${({ size }) => {
		switch (size) {
			case "sm":
				return css`
					padding: 6px 12px;
				`;
			case "md":
				return css`
					padding: 8px 16px;
				`;
			case "lg":
				return css`
					padding: 11px 22px;
				`;
		}
	}}

	// COLOR VARIATION
	${({ color }) => {
		switch (color) {
			case "primary":
				return css`
					color: white;
					background-color: #0069d9;
					&:hover {
						background-color: #094586;
					}
				`;
			case "secondary":
				return css`
					color: white;
					background-color: #6c757d;
					&:hover {
						background-color: #40474d;
					}
				`;
			case "success":
				return css`
					color: white;
					background-color: #28a745;
					&:hover {
						background-color: #1f7031;
					}
				`;
		}
	}}
`;
