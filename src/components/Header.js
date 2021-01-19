import React, {Component} from 'react';
import Navbar from "./Navbar";
import HomePage from "../containers/HomePage";
import Portfolio from "../containers/Portfolio";
import ContactPage from "../containers/ContactPage";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";


class Header extends Component {

  render() {
    return (
            <Navbar/>
    );
  }
}

export default Header;