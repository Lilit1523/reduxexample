import React, { Component } from 'react';
import { 
	BrowserRouter as  Router, 
	Route,
	Switch
} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/footer';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import Profile from './components/Profile';
import CompleteProfile from './components/CompleteProfile';

import './App.css';

import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';
import MyMoney from './components/my-money/my-money';

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
			        <Route exact path="/shop" >
			        	<Shop />
			        </Route>
			        <Route exact path="/profile" >
			        	<Profile />
			        </Route>
					<Route exact path="/complete-profile" >
			        	<CompleteProfile />
			        </Route>
					<Route exact path="/my-money" >
			        	<MyMoney />
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
