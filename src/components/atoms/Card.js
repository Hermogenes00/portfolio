import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardBody = styled.div`
	background-color: ${(props) => props.theme.color.primary};
	border: 1px solid ${(props) => props.theme.color.primary};
	border-radius: 5px;
	padding: 8px 16px;
	padding-bottom: 16px;
	width: 100%;
	height: 100%;
	text-align: center;

	padding: 0;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		text-align: center;
		margin: 0;
	}
	p {
		margin: 0;
		text-align: justify;
	}
	svg {
		cursor: pointer;
		color: white;
		font-size: 2rem;
	}
`;

const CardMedia = styled.div`
	background-image: url(${(props) => props.image});
	display: flex;
	border-radius: 5px;
	background-position: center center;
	background-size: cover;
	height: 150px;
`;

const Card = ({ image, children }) => (
	<CardBody>
		<CardMedia image={image} />
		{children}
	</CardBody>
);

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
