import React from "react";
import Header from "./Header";
import DevImage from "draws/Dev";
import DevComputer from "draws/DevComputer";
import { FaReact, FaJs, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
import Stack from "components/atoms/Stack";

export default {
	title: "Components/Molecules/header",
	component: Header,
};

const stacks = [
	{ title: "React JS", svg: <FaReact /> },
	{ title: "Javascript", svg: <FaJs /> },
	{ title: "NodeJs", svg: <FaNodeJs /> },
	{ title: "Sequelize,KnexJs", svg: <FaDatabase /> },
	{ title: "Java", svg: <FaJava /> },
];

export const usage = () => (
	<Header
		image={<DevComputer />}
		title={
			<h1>
				Bem vindo ao <br /> meu portfólio
			</h1>
		}></Header>
);
