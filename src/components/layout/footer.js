import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShopIcon from '@material-ui/icons/Shop';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { 
	makeStyles,
	Container,
	Box
} from '@material-ui/core';

const svgStyle = {
	fontSize: '52px',
	color: '#fff',
};

const useStyles = makeStyles(theme => ({
	root: {
		padding: '30px',
		background: '#333',
		'& > main > h1': {
			color: '#fff',
		},
	},
	socialLinks: {
		listStyleType: 'none',
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		padding: '0',
		'& > li': {
			margin: '30px 15px 10px',
			'& > a': {
				display: 'inline-block',
				'&:hover': {
					'& > svg': {
						color: 'rgb(173, 161, 161) !important',
					}
				}
			}
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<Container component="main" maxWidth="md">
				<Box m={2} component="h1" textAlign="center" fontWeight={500}>
					Get in touch
				</Box>
				<ul className={classes.socialLinks}>
					<li><a href="#">
							<FacebookIcon style={svgStyle} />
						</a>
					</li>
					<li><a href="#">
							<TwitterIcon style={svgStyle}/>
						</a>
					</li>
					<li><a href="#">
							<ShopIcon style={svgStyle} />
						</a>
					</li>
					<li><a href="#">
							<PinterestIcon style={svgStyle} />
						</a>
					</li>
					<li><a href="#">
							<LinkedInIcon style={svgStyle} />
						</a>
					</li>
					<li><a href="#">
							<InstagramIcon style={svgStyle} />
						</a>
					</li>
				</ul>
			</Container>
		</footer>
	);
}