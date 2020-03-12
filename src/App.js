import React, { Component } from 'react';
import { 
	BrowserRouter as  Router, 
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/footer';
import About from './components/pages/About';

import './App.css';

import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

class App extends Component {
	render() {
	  return (
	    <Provider store={store}>
	      <div className="App">
	      	<Router>
	      		<Header />
		      	<Switch>
			        <Route exact path="/" >
			        	<PostForm />
			        </Route>
			        <Route exact path="/about" >
			        	<About />
			        </Route>
			        <Route exact path="/posts" >
			        	<Posts />
			        </Route>
			    </Switch>
			    <Footer />
			</Router>   
	      </div>
	    </Provider>
	  );
	}
}

export default App;
