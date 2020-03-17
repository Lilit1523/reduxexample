import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import EdiText from 'react-editext';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
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

const UserPersonal = ({user}) => {
	const classes = useStyles();
	const [editing, setEditing] = useState(false);
  	const [value, setValue] = useState("Password");
  	const edit = useState("edit");

  	const handleSave = value => {
	    console.log(value);
	    setValue(value);
	};

	return (
		<Grid item xs={12}>
			<Box m={1} style={{marginTop: '20px', marginBottom: '20px'}}>
				<Typography component="h4" variant="p" className={classes.heading4}>
					PERSONAL DETAILS
				</Typography>
			</Box>
			<Box m={1} style={{marginTop: '8px', marginBottom: '8px'}}>
				<Typography component="h4" variant="p" className={classes.heading4}>
					{user.email}
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
					{user.subscriptions}
				</Typography>
			</Box>	
		</Grid>
	);
}
export default UserPersonal;