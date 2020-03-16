import React, { Component } from 'react';
import { useState } from 'react';
import EdiText from "react-editext";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '3em',
	},
	avatarIconStyle: {
		color: '#ccc',
		fontSize: '7em',
		width: '90%',
	},
	profileBlock: {
		margin: '20px',
		border: '1px solid #ccc',
		padding: '10px 15px',
		borderRadius: '15px',
	},
	heading4: {
		fontWeight: '300',
		fontSize: '15px',
	},
	ediText: {
		'& > div': {
			justifyContent: 'space-between',
			width: '100%',
		},
		'& > div > div:last-child button[editext="edit-button"]': {
			backgroundColor: '#fff',
			padding: '0',
			border: 'none',
			'&:hover': {
				color: '#1ca6e8',
			},
			'&:before': {
				display: 'none',
			},
		},	
	},
}));

export default function Profile() {
	const classes = useStyles();
	const [editing, setEditing] = useState(false);
  	const [value, setValue] = useState("Password");
  	const edit = useState("edit");

  	const handleSave = value => {
	    console.log(value);
	    setValue(value);
	};

	return (
		<Typography component="div" className={classes.root}>
			<Container component="main" maxWidth="md">
				<Typography component="h3" variant="h5">
					My Profile
				</Typography>
				<Grid container 
					  alignItems="center" 
					  xs={12} sm={10} md={4} 
					  className={classes.profileBlock}>
					<Grid item xs={5}>
						<AccountCircleIcon className={classes.avatarIconStyle} />
					</Grid>
					<Grid item xs={7}>
						<Typography component="h4" variant="p" className={classes.heading4}>
							Name
						</Typography>
						<Typography component="h4" variant="p" className={classes.heading4}>
							Last Name
						</Typography>
						<Typography component="h4" variant="p" className={classes.heading4}>
							Country
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box m={1} style={{marginTop: '20px', marginBottom: '20px'}}>
							<Typography component="h4" variant="p" className={classes.heading4}>
								PERSONAL DETAILS
							</Typography>
						</Box>
						<Box m={1} style={{marginTop: '8px', marginBottom: '8px'}}>
							<Typography component="h4" variant="p" className={classes.heading4}>
								Email
							</Typography>
						</Box>
						<Box m={1} style={{marginTop: '8px', marginBottom: '8px'}}>	
							<EdiText
							  className={classes.ediText}
					          value={value}
					          type="password"
					          onSave={handleSave}
					          editing={editing}
					          editButtonContent={edit}
					        />
						</Box>
						<Box m={1} style={{marginTop: '8px', marginBottom: '8px'}}>	
							<Typography component="h4" variant="p" className={classes.heading4}>
								Subscriptions
							</Typography>
						</Box>	
					</Grid>
					<Grid item xs={12}>
						<Box m={1} style={{marginTop: '40px', marginBottom: '10px'}}>
							<Typography component="h4" variant="p" className={classes.heading4}>
								Phone
							</Typography>
						</Box>
						<Box m={1} style={{marginBottom: '10px'}}>	
							<Typography component="h4" variant="p" className={classes.heading4}>
								Address
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Typography>
	);
}