import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';

const btn = {
	background: '#fff',
	border: 'none',
	outline: 'none',
	cursor: 'pointer'
}

const flexBlock = {
	display: 'flex',
	justifyContent: 'space-between',
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
	          <div style={flexBlock}>
	            <TextInput 
	              saveInput={ this.saveInput }
	             />
	            <button onClick={ this.toggleEditing } style={btn}>done</button>            
	          </div>    
	        ) 
	    }
		return (
			<div style={flexBlock}>
		        <TextField 
		          text={ password }
		        />
		        <button onClick={ this.toggleEditing } style={btn}>edit</button>
		    </div> 
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
	      <div style={flexBlock}>
	        <input 
	          type="text"  
	          ref={this.inputRef}
	         />
	        <button onClick={ this.handleInput } style={btn}>save</button>
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