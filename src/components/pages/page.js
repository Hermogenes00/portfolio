import React from "react";
import PropTypes from "prop-types";
import Header from "../molecules/Header";
import About from "../molecules/About";
import DevImage from "../../draws/Dev";
import DevComputer from "draws/DevComputer";
import MenImage from "../../draws/Men";
import Projects from "components/molecules/Projects";
import Footer, { LineItems } from "components/molecules/Footer";
import CommerceImage from "stories/assets/commerce.png";
import Button from "components/atoms/Button";

const projects = [
	{
		title: "NewCommerceFront",
		body: `Front do ecommerce que está em processo de desenvolvimento.`,
		image: CommerceImage,
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

const getPrimaryColor = (props) => props.theme.color.primary;

const Page = () => (
	<>
		<Header
			image={<DevComputer />}
			title={
				<h1>
					Bem vindo ao <br /> meu portfólio
				</h1>
			}></Header>
		<About image={<MenImage />}>
			<div>
				<h1>Sobre mim</h1>
				<p>
					Me chamo Hermógenes Neto, mas pode me chamar só de Neto mesmo (entendo
					que muitos sentem um trava línguas ao pronunciar Hermógenes,
					rsrsrsrs). Sou apaixonado por tecnologia, graduado em Análise e
					Desenvolvimento de Sistemas pela Univerdade Tiradentes, pós graduando
					em Programação Orientado a Objetos (estou na reta final, concluindo o
					tcc) pela Faculdade Estácio de Sá.
				</p>
				<LineItems>
					<div>
						<Button color={getPrimaryColor}>Html</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>CSS</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>Javascript</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>React Js</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>Styled Component</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>Storybook</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>NodeJS</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>Sequelize</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>KnexJs</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>ApiRest</Button>
					</div>
					<div>
						<Button color={getPrimaryColor}>Java</Button>
					</div>
				</LineItems>
			</div>
		</About>
		<Projects title="Meus projetos" projects={projects} />
		<Footer />
	</>
);

Page.defaultProps = {};

Page.propTypes = {};

export default Page;
