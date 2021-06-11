import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "../styles/globalStyles";
const light = {};

const ocean = {};

const theme = {
	color: {
		background: "#1579B0",
		primary: "#6C63FF",
		footer: "#404345",
		inverse: "#EEEEEE",
	},
};

const ThemeProvider = ({ children }) => (
	<StyledThemeProvider theme={theme}>
		<Helmet>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
		<GlobalStyle />
		{children}
	</StyledThemeProvider>
);

export default ThemeProvider;
