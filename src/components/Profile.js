import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import UserShort from './my-profile/user-short';
import UserPersonal from './my-profile/user-personal';
import UserShortContacts from './my-profile/user-short-contacts';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '3em',
	},
	profileBlock: {
		margin: '20px',
		border: '1px solid #ccc',
		padding: '10px 15px',
		borderRadius: '15px',
	},
}));

const user = [
	{
		id: 1,
		name: 'Petros',
		lastname: 'Poxosovich',
		country: 'Albania',
		src: '',
		email: 'petros@burunduk.com',
		subscriptions: '100',
		phone: '+37494417457',
		address: 'Davit Malyan 2',
	}
];

function Profile() {
	const classes = useStyles();

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
					  {user.map(user => (
						<UserShort user={user} />
					  ))}
					  {user.map(user => (
						<UserPersonal user={user} />
					  ))}
					  {user.map(user => (
						<UserShortContacts user={user} />
					  ))}
					  
				</Grid>
			</Container>
		</Typography>
	);
}
export default Profile;