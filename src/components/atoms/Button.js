import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const getColor = (props) => (props.color ? props.color : "white");

const Button = styled.button`
	border-radius: 5px;
	font-weight: 700;
	padding: 5px 8px;
	background: transparent;
	border: 1px solid ${(props) => props.theme.color.primary};
	cursor: pointer;
	color: ${getColor};
	font-size: 1.2rem;
	margin: 10px;
	svg {
		color: ${(props) => props.theme.color.primary};
	}
	:hover {
		svg {
			color: white;
		}
		border-color: white;
		color: ${(props) => props.theme.color.primary};
	}
`;

Button.defaultProps = {};

Button.propTypes = {};

export default Button;
