import React from 'react';
import { 
	makeStyles,
	Typography,
	Grid,
	Avatar
} from '@material-ui/core';

const avatarIconStyle = {
	width: '96px',
	height: '96px',
};

const UserShort = ({user}) => {
	let imgScr;
	if(user.src) {
		imgScr = user.src;
	} else {
		imgScr = '/broken-image.jpg';
	}

	return (
		<Grid container
			  alignItems="center"
			  xs={12} item>
			<Grid item xs={5}>
				<Avatar src={imgScr} style={avatarIconStyle} />
			</Grid>
			<Grid item xs={7}>
				<Typography component="h4">
					{user.name}
				</Typography>
				<Typography component="h4">
					{user.lastname}
				</Typography>
				<Typography component="h4">
					{user.country}
				</Typography>
			</Grid>
		</Grid>
	);

}
export default UserShort;