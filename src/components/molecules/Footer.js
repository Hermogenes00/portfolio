import React from "react";
import PropTypes from "prop-types";
import Section from "components/atoms/Section";
import styled from "styled-components";
import {
	FaFacebook,
	FaLinkedinIn,
	FaWhatsapp,
	FaGithubAlt,
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";

import Grid from "components/atoms/Grid";
import Button from "components/atoms/Button";

const Root = styled.div`
	text-align: center;
	justify-items: center;
	justify-content: center;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}
	svg {
	}
`;

export const LineItems = styled.div`
	padding: 10px 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-content: stretch;
`;

const Footer = () => (
	<Section color={"#404345"}>
		<Root>
			<h2>Me encontre facilmente</h2>
			<Grid size={1}>
				<LineItems>
					<div>
						<Button as="a" href="https://www.linkedin.com/in/hermogenesneto/">
							<FaLinkedinIn /> LinkedIn
						</Button>
					</div>
					<div>
						<Button
							as="a"
							href="https://api.whatsapp.com/send?phone=5575983299841&text=Ol%C3%A1%2C%20vi%20o%20seu%20portf%C3%B3lio">
							<FaWhatsapp /> Whatsapp
						</Button>
					</div>
					<div>
						<Button as="a" href="https://github.com/Hermogenes00/">
							<FaGithubAlt /> Github
						</Button>
					</div>
					<div>
						<Button as="a" href="https://www.facebook.com/neto.santos.942">
							<FaFacebook /> Facebook
						</Button>
					</div>
					<div>
						<Button as="a" href="mailto:netos0223@gmail.com">
							<FiMail /> Email
						</Button>
					</div>
				</LineItems>
			</Grid>

			<h5>© Todos os direitos reservados</h5>
		</Root>
	</Section>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
