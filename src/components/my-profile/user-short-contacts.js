import React, { Component } from 'react';
import { 
	Grid,
	Box
} from '@material-ui/core';

const UserShortContacts = ({user}) => {
	return (
		<Grid item xs={12}>
			<Box m={1} mt={6} fontWeight={300} component="h4">
				{user.phone}
			</Box>
			<Box m={1} mb={3} fontWeight={300} component="h4">	
				{user.address}
			</Box>
		</Grid>
	);
}
export default UserShortContacts;