import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
	text-align: center;
	ul {
		list-style: none;
	}

	li {
		list-style: none;
		display: inline;
		padding-left: 0.5rem;
	}
	svg {
		color: red;
		font-size: 2.5rem;
		:hover {
			color: white;
		}
	}
`;

const Stack = ({ stacks }) => (
	<Wrapper>
		<ul>
			{stacks.map((stack) => (
				<li title={stack.title} key={stack.title}>
					{stack.svg}
				</li>
			))}
		</ul>
	</Wrapper>
);

Stack.defaultProps = {};

Stack.propTypes = {};

export default Stack;
