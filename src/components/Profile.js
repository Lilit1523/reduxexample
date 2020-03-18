import React, {useState} from 'react';
import { 
	makeStyles,
	Typography,
	Grid,
	Container
} from '@material-ui/core';


import UserShort from './my-profile/user-short';
import UserPersonal from './my-profile/user-personal';
import UserShortContacts from './my-profile/user-short-contacts';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '3em',
	},
	profileBlock: {
		margin: '20px',
		border: '1.5px solid #eae8e8',
		padding: '10px 15px',
		borderRadius: '15px',
	},
}));

const dummyUsers = [
	{
		id: 1,
		name: 'Petros',
		lastname: 'Poxosovich',
		country: 'Albania',
		src: '',
		password: 'asdasd123',
		email: 'petros@burunduk.com',
		subscriptions: '100',
		phone: '+37494417457',
		address: 'Davit Malyan 2',
	}
];


const Profile = () => {
	const classes = useStyles();
	const [users ,setUser ] = useState(dummyUsers);
	const changePassword = (pass, id) => {
		let newUsers = users.map((user) => {
			if(user.id === id){
				return {
					...user,
					password: pass
				}
			}else{
				return user;
			}
		})
		
		setUser(newUsers);
	}
	return (
		<Typography component="div" className={classes.root}>
			<Container component="main" maxWidth="md">
				<Typography variant="h5">
					My Profile
				</Typography>
				<Grid container 
					  alignItems="center" 
					  xs={12} sm={8} md={4} item 
					  className={classes.profileBlock}>
					  {users.map((user, index) => (
						<UserShort key={index} user={user} />
					  ))}
					  {users.map((user, index) => (
						<UserPersonal changePassword={changePassword} key={index} user={user} />
					  ))}
					  {users.map((user, index) => (
						<UserShortContacts key={index} user={user} />
					  ))}				  
					  
				</Grid>
			</Container>
		</Typography>
	);
}
export default Profile;