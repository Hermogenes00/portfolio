import React from "react";
import PropTypes from "prop-types";
import Section from "components/atoms/Section";
import Grid from "components/atoms/Grid";
import Card from "components/atoms/Card";
import styled from "styled-components";
import BgImage from "stories/assets/code.png";

const Root = styled.div`
	text-align: center;
	padding: 16px 0;
	h1 {
		margin-bottom: 30px;
	}
`;

const Projects = ({ title, projects }) => (
	<Section bgImage={BgImage}>
		<Root>
			<h1>{title}</h1>
			<Grid size={4}>
				{projects.map((proj) => (
					<Card image={proj.image}>
						<h3>{proj.title}</h3>
						<p>{proj.body}</p>
					</Card>
				))}
			</Grid>
		</Root>
	</Section>
);

Projects.defaultProps = {
	projects: [],
};

Projects.propTypes = {};

export default Projects;
