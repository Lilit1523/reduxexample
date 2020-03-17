import React from 'react';
import { Link } from 'react-router-dom';
import { 
	makeStyles,
	Typography,
	Grid,
	SvgIcon
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
  headerStyle: {
  	background: '#262338',
	textAlign: 'center',
	padding: '10px',
  },
  linkStyle: {
  	color: '#fff',
  	fontSize: '18px',
	textDecoration: 'none',
	display: 'flex',
	justifyContent: 'center',
	'& > svg': {
		marginRight: '8px',
	},
	'&:hover': {
		textDecoration: 'underline',
	}
  },
  gridBox: {
  	flex: '0 0 10%',
  	margin: '0 8px',
  }
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
		<Typography component="div" className={classes.root}>
			<header className={classes.headerStyle}>
				<Grid container 
					  spacing={3}
					  justify="center"
  					  alignItems="center">
					<Grid item xs={5}>
						<figure style={{margin: '0'}}>
							<img src="images/logo.png" alt="Brand Logo" height="55" width="auto" />
						</figure>
					</Grid>
					<Grid item xs={7}>
						<Grid container 
						      spacing={3}
							  justify="center"
  							  alignItems="center">
							<Grid className={classes.gridBox}>
								<Link className={classes.linkStyle} to="/">
									<HomeIcon /> 
									Home
								</Link>
							</Grid>	
							<Grid className={classes.gridBox}>
								<Link className={classes.linkStyle} to="/about">About</Link>
							</Grid>
							<Grid className={classes.gridBox}>
								<Link className={classes.linkStyle} to="/posts">Posts</Link>
							</Grid>
							<Grid className={classes.gridBox}>
								<Link className={classes.linkStyle} to="/shop">
									<AddShoppingCartIcon />
									Shop
								</Link>
							</Grid>
							<Grid className={classes.gridBox}>
								<Link className={classes.linkStyle} to="/profile">Profile</Link>
							</Grid>
						</Grid>	
					</Grid>
				</Grid>
			</header>
		</Typography>
	);
}