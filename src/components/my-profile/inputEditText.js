import React, { Component, useState } from 'react';
import { Box, Grid, Button } from '@material-ui/core';

const btn = {
	textTransform: 'none',
	minWidth: 'fit-content',
	margin: '0 2px'
}

class InputEditText extends Component {
	state= {};
	constructor(props) {
    	super(props);
    	this.toggleEditing = this.toggleEditing.bind(this);
    	this.saveInput = this.saveInput.bind(this);
    } 
	getInitialState() {
	    return {
	      userIsEditing: false,
	    }
	}
	toggleEditing() {
	    let userIsEditing = !this.state.userIsEditing;
	    this.setState({
	      userIsEditing: userIsEditing
	    })
	}
	saveInput(input) {
		this.props.changePassword(input, this.props.user.id);
	    this.setState({
	      inputValue: input
		});
	}
	render() {
		let userIsEditing = this.state.userIsEditing;
		let {password} = this.props.user;
		
	    if (userIsEditing) {
	        return (
				<Grid container 
				alignItems="center">
					<TextInput 
					saveInput={ this.saveInput }
					/>
					<Button size="small" onClick={ this.toggleEditing } style={btn}>done</Button>            
	          	</Grid>    
	        ) 
	    }
		return (
			<Grid container 
				alignItems="center"
				justify="space-between">
		        <TextField 
		          text={ password }
		        />
		        <Button size="small" onClick={ this.toggleEditing } style={btn}>edit</Button>
		    </Grid> 
		);	
	}
}
class TextInput extends Component {
	constructor(props) {
    	super(props);
    	this.handleInput = this.handleInput.bind(this);
    	this.inputRef = React.createRef();
    }
	handleInput() {
	    let input = this.inputRef.current;
	    this.props.saveInput(input.value);
	    input.value = '';
	}
	render() {
	    let label = this.props.label;
	    return (
			<div>
				<input 
				type="text"  
				ref={this.inputRef}
				/>
				<Button size="small" onClick={ this.handleInput } style={btn}>save</Button>
	      </div>
	    )
	}
}
class TextField extends Component {
	render() {
	    let text = this.props.text;
	    return (
	        <Box>{ text }</Box>
	    )
	}
}
export default InputEditText;