import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/home/Home';


import Contacts from './components/pages/contacts/Contacts';
import AddContact from './components/pages/contacts/AddContact';
import EditContact from './components/pages/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <div className="App">
              <Header branding="Basic Template" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/contact/edit/:id" component={EditContact} />
                  <Route exact path="/about" component={About} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;