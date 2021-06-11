import React from "react";
import Grid from "./Grid";

export default {
	title: "Components/Atoms/grid",
	component: Grid,
};

export const usage = () => (
	<Grid size={2}>
		<div>
			<h1>Column1</h1>
		</div>
		<div>
			<h1>Column2</h1>
		</div>
	</Grid>
);
