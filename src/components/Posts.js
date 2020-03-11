import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { fetchPosts } from '../action/postAction';


class Posts extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		const postItems = this.props.posts.map(post => (
			<Grid key={post.id}>
				<Box m={2}>
					<Typography component="h1" variant="h5">
						{post.title}
					</Typography>
					<Typography component="p">
						{post.body}
					</Typography>
				</Box>
			</Grid>
		));

		return (
			<Container component="main" maxWidth="sm">
				<Typography component="h1" variant="h1">
					Posts
				</Typography>
				{ postItems }
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);