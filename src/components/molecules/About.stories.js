import React from "react";
import About from "./About";
import MenImage from "../../draws/Men";
export default {
	title: "Components/Molecules/about",
	component: About,
};

export const usage = () => (
	<About image={<MenImage />}>
		<>
			<h1>Sobre mim</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
				voluptatum cum praesentium eos, libero odio, enim voluptate distinctio,
				aut ea quos nemo aperiam. Perferendis eius doloribus itaque dolore
				laboriosam consequatur. Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Tempore nihil molestias voluptatem commodi tenetur
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea reiciendis
				aperiam corporis quia aliquam modi ratione mollitia? Tempora ipsa quas
				eveniet ea eligendi, commodi expedita rerum ipsum minus nisi? Est. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda,
				necessitatibus maiores pariatur nesciunt aliquam eveniet doloribus
				aspernatur ducimus facilis, enim recusandae odio error. Totam quo
				temporibus facere consectetur tenetur.
			</p>
		</>
	</About>
);
