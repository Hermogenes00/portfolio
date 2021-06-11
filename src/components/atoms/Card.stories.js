import React from "react";
import Card from "./Card";
import { FaGithubAlt, FaStore } from "react-icons/fa";
import Grid from "./Grid";
import CommerceImage from "stories/assets/commerce.png";

export default {
	title: "Components/Atoms/card",
	component: Card,
};

export const usage = () => (
	<Card image={CommerceImage}>
		<h3>Título</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat delectus
			facere molestias commodi impedit ducimus consectetur id voluptatum
			quisquam, nulla doloremque officiis, ad, reprehenderit aut. Perspiciatis
			ipsum iste corporis autem.
		</p>
		<FaGithubAlt />
		<FaStore />
	</Card>
);

export const groupCard = () => (
	<Grid size={3}>
		<Card image={CommerceImage}>
			<h3>Título</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat delectus
				facere molestias commodi impedit ducimus consectetur id voluptatum
				quisquam, nulla doloremque officiis, ad, reprehenderit aut. Perspiciatis
				ipsum iste corporis autem.
			</p>
			<FaGithubAlt />
			<FaStore />
		</Card>

		<Card image={CommerceImage}>
			<h3>Título</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat delectus
				facere molestias commodi impedit ducimus consectetur id voluptatum
				quisquam, nulla doloremque officiis, ad, reprehenderit aut. Perspiciatis
				ipsum iste corporis autem.
			</p>
			<FaGithubAlt />
			<FaStore />
		</Card>
		<Card image={CommerceImage}>
			<h3>Título</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat delectus
				facere molestias commodi impedit ducimus consectetur id voluptatum
				quisquam, nulla doloremque officiis, ad, reprehenderit aut. Perspiciatis
				ipsum iste corporis autem.
			</p>
			<FaGithubAlt />
			<FaStore />
		</Card>
	</Grid>
);
