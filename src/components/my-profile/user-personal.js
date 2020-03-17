import React from 'react';
import { useState } from 'react';
import { 
	makeStyles,
	Grid,
	Box
} from '@material-ui/core';
import InputEditText from './inputEditText';

const UserPersonal = ({user,changePassword}) => {
	
	return (
		<Grid item xs={12}>
			<Box m={1} mt={4} mb={3} fontWeight={300} component="h3">
				PERSONAL DETAILS
			</Box>
			<Box m={1} fontWeight={300} component="h4">
				{user.email}
			</Box>
			<Box m={1} fontWeight={300} component="h4">	
				<InputEditText changePassword={changePassword} user={user} />
			</Box>
			<Box m={1} fontWeight={300} component="h4">	
				{user.subscriptions}
			</Box>	
		</Grid>
	);
}
export default UserPersonal;