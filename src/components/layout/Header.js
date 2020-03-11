import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  headerStyle: {
  	display: 'flex',
  	justifyContent: 'center',
  	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px',
  },
  linkStyle: {
  	display: 'inherit',
  	justifyContent: 'inherit',
  	flex: '0 0 10%',
  	color: '#fff',
  	fontSize: '18px',
	textDecoration: 'none',
	'& > svg': {
		marginRight: '8px',
	},
	'&:hover': {
		textDecoration: 'underline',
	}
  },
}));


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<header className={classes.headerStyle}>
				<Link className={classes.linkStyle} to="/">
					<HomeIcon /> 
					Home
				</Link>
				<Link className={classes.linkStyle} to="/about">About</Link>
				<Link className={classes.linkStyle} to="/posts">Posts</Link>
			</header>
		</div>
	);
}