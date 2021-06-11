import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const defineBgColor = (props) => {
	return props.color ? props.color : props.theme.color.background;
};

const Section = styled.div`
	padding: 16px 50px;
	width: 100%;
	background-color: ${defineBgColor};
	${(props) =>
		props.bgImage &&
		css`
			background-image: url(${props.bgImage});
			display: flex;
			background-position: center center;
		`}
`;

//section.defaultProps= {};

//section.propTypes ={};

export default Section;
