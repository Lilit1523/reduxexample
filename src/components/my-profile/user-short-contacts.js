import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const heading4 = {
	fontWeight: '300',
	fontSize: '15px',
};

const UserShortContacts = ({user}) => {
	return (
		<Grid item xs={12}>
			<Box m={1} style={{marginTop: '60px', marginBottom: '10px'}}>
				<Typography component="h4" variant="p" style={heading4} >
					{user.phone}
				</Typography>
			</Box>
			<Box m={1} style={{marginBottom: '10px'}}>	
				<Typography component="h4" variant="p" style={heading4} >
					{user.address}
				</Typography>
			</Box>
		</Grid>
	);
}
export default UserShortContacts;