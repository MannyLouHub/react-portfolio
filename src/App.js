import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import ContactPage from "./containers/ContactPage";
import Portfolio from "./containers/Portfolio";
import MovieReviewSite from "./components/ProjectInformation/MovieReviewSite";
function App() {

 const renderPage = () => {
    return <Switch>
      <Route exact={true} path="/HomePage" component={HomePage} />
      <Route exact={true} path="/ContactPage" component={ContactPage} />
      <Route exact={true} path="/Portfolio" component={Portfolio} />
      <Route exact={true} path={"/MovieReviewSite"} component={MovieReviewSite} />
      <Redirect to="/HomePage"/>
      <Redirect exact from={"/"} to={'/Homepage'} />
    </Switch>
  };


  return (
    <div className="App">

      <Router basename={'/'}>
        <Header/>
        {renderPage()}
        <Footer/>
      </Router>


    </div>
  );
}

export default App;
