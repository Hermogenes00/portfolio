import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = styled.div`
	display: grid;
	column-gap: 3px;
	row-gap: 5px;
	grid-template-columns: repeat(${(props) => props.size}, 1fr);
`;

export default Grid;
