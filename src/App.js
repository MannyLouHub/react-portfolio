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
import SubscriptionTracker from "./components/ProjectInformation/SubscriptionTracker";
import StockNewsApp from "./components/ProjectInformation/Stock-News-App";
import WeatherDashboard from "./components/ProjectInformation/WeatherDashboard";

function App() {

  const renderPage = () => {
    return <Switch>
      <Route exact={true} path="/HomePage" component={HomePage}/>
      <Route exact={true} path="/ContactPage" component={ContactPage}/>
      <Route exact={true} path="/Portfolio" component={Portfolio}/>
      <Route exact={true} path={"/MovieReviewSite"} component={MovieReviewSite}/>
      <Route exact={true} path={'/SubscriptionTracker'} component={SubscriptionTracker}/>
      <Route exact={true} path={'/StockNewsApp'} component={StockNewsApp}/>
      <Route exact={true} path={'/WeatherDashboard'} component={WeatherDashboard}/>
      <Redirect to="/HomePage"/>
      <Redirect exact from={"/"} to={'/Homepage'}/>
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
