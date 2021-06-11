import React from "react";
import Projects from "./Projects";

export default {
	title: "Components/Molecules/Projects",
	component: Projects,
};

const projects = [
	{
		title: "Projeto1",
		body: `Exemplo de descrição do projeto Exemplo de descrição do projeto 
            Exemplo de descrição do projeto Exemplo de descrição do projeto`,
	},
	{
		title: "Projeto1",
		body: `Exemplo de descrição do projeto Exemplo de descrição do projeto 
            Exemplo de descrição do projeto Exemplo de descrição do projeto`,
	},
	{
		title: "Projeto1",
		body: `Exemplo de descrição do projeto Exemplo de descrição do projeto 
            Exemplo de descrição do projeto Exemplo de descrição do projeto`,
	},
	{
		title: "Projeto1",
		body: `Exemplo de descrição do projeto Exemplo de descrição do projeto 
            Exemplo de descrição do projeto Exemplo de descrição do projeto`,
	},
];

export const usage = () => (
	<Projects title="Meus projetos" projects={projects} />
);
