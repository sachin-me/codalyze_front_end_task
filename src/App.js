import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Main from './Components/Main';
import EditProduct from './Components/EditProduct';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Router>
					<Route exact path='/' component={Main} />
					<Route path='/edit-product' component={EditProduct} />
				</Router>
      </div>
    );
  }
}

export default App;
