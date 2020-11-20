import React, {Component} from 'react';
import Navbar from "./Navbar";
import HomePage from "../containers/HomePage";
import Portfolio from "../containers/Portfolio";
import ContactPage from "../containers/ContactPage";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";


class Header extends Component {
  state = {
    currentPage: 'HomePage'
  };

  handlePageChange = (page) => {
    this.setState({currentPage: page})
  }

  renderPage = () => {
    return <Switch>
      <Route exact={true} path="/HomePage" component={HomePage}/>
      <Route exact={true} path="/ContactPage" component={ContactPage}/>
      <Route exact={true} path="/Portfolio" component={Portfolio}/>
      <Redirect to="/HomePage"/>
      <Redirect exact from={"/"} to={'/Homepage'} />
    </Switch>
  };

  render() {
    return (
        <div>
          <Router basename={'/'}>
            <Navbar
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
          </Router>
        </div>
    );
  }
}

export default Header;