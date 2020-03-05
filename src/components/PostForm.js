import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}
	}

	render() {
		return (
			<Container component="main" maxWidth="xs">
				<div>
					<Typography component="h1" variant="h3">
						Add Post
					</Typography>
					<form onSubmit={this.onSubmit}>
						<Grid item xs={12} sm={6}>
							<FormControlLabel 
								control={<Checkbox value="allowExtraEmails" color="primary" />}
                				label="Checkbox box"
							/><br />
							<label>Title: </label><br />
							<input 
								type="text" 
								name="title"
								onChange={this.onChange} 
								value={this.state.title}/>
						</Grid>
						<br />
						<Grid item xs={12} sm={6}>
							<TextField
				                variant="outlined"
				                required
				                fullWidth
				                id="email"
				                label="Email Address"
				                name="email"
				                autoComplete="email"
				              />
						</Grid>
						<br />
						<Button variant="contained" color="primary" type="submit">Submit</Button>
					</form>
				</div>
			</Container>
			
		)
	}
}

export default PostForm;