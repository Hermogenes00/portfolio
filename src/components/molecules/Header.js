import React from "react";
import PropTypes from "prop-types";
import Grid from "../atoms/Grid";
import styled from "styled-components";
import Section from "components/atoms/Section";

const ImageContainer = styled.div`
	svg {
		font-size: 15rem;
		margin: 0;
		padding: 0px;
	}
`;

const Container = styled.div`
	text-align: center;
	h1,
	h2,
	h3,
	h5,
	h6 {
		margin: 0px;
		padding-top: 16px;
	}
`;

const Header = ({ image, title }) => (
	<Section>
		<Container>
			<Grid size={2}>
				<div>{title}</div>
				<ImageContainer>{image}</ImageContainer>
			</Grid>
		</Container>
	</Section>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
