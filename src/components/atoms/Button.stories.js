import React from "react";
import Button from "./Button";
import {
	FaFacebook,
	FaLinkedinIn,
	FaWhatsapp,
	FaGithubAlt,
} from "react-icons/fa";

export default {
	title: "Components/Atoms/Button",
	component: Button,
};

export const usage = () => (
	<Button>
		<FaFacebook /> Facebook
	</Button>
);
