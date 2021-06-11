import React from "react";
import PropTypes from "prop-types";
import Section from "components/atoms/Section";
import Grid from "../atoms/Grid";
import styled from "styled-components";

const Root = styled.div`
	color: ${(props) => props.theme.color.primary};
	text-align: center;
	display: flex;
	align-items: center;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${(props) => props.theme.color.primary};
		font-weight: 300;
	}
	p {
		text-align: left;
		color: black;
	}
	svg {
		min-width: 500px;
		height: auto;
	}
`;

const About = ({ children, image }) => (
	<Section color="#FDFDFD">
		<Root>
			<Grid size={2}>
				<div>{image}</div>
				<div>{children}</div>
			</Grid>
		</Root>
	</Section>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
