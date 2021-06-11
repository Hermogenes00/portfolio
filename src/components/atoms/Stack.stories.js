import React from "react";
import Stack from "./Stack";
import { FaReact, FaJs, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
import Grid from "./Grid";
import Section from "./Section";

export default {
	title: "Components/Atoms/Stack",
	component: Stack,
};

const stacks = [
	{ title: "React JS", svg: <FaReact /> },
	{ title: "Javascript", svg: <FaJs /> },
	{ title: "NodeJs", svg: <FaNodeJs /> },
	{ title: "Sequelize,KnexJs", svg: <FaDatabase /> },
	{ title: "Java", svg: <FaJava /> },
];

export const usage = () => <Stack stacks={stacks} />;

export const withGrid = () => (
	<Section>
		<Grid size={2}>
			<div>
				<h1>My text</h1>
			</div>
			<div>
				<h1>My text2</h1>
			</div>
			<Stack stacks={stacks} />
		</Grid>
	</Section>
);
