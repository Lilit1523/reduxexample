import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function About() {
	return (
		<React.Fragment>
			<Container component="main" maxWidth="sm">
				<Typography component="h1" variant="h1">
					About
				</Typography>
				<Typography component="p" variant="p">
					This is the about part of my first app
				</Typography>
			</Container>
		</React.Fragment>
	)
}

export default About;