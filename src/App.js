import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import LandingPage from './Components/Pages/LandingPage';
import Login from './Components/Auth/Login';
import AuthService from "./Components/Auth/Auth.service";
import handleReqRes from "./Components/Auth/Handle-response";
import Register from './Components/Auth/Register';
import ConfirmEmail from './Components/Pages/ConfirmEmail';
import CompleteProfile from "./Components/Pages/CompleteProfile";
import ForgotPassword from './Components/Pages/ForgotPassword';
import ResetPassword from './Components/Pages/ResetPassword';
import HomePage from './Components/Pages/Home';
import Search from './Components/Pages/Search';
import Marketplace from './Components/Pages/Marketplace';
import Portfolio from "./Components/Pages/Portfolio";
import Dashboard from './Components/Pages/Dashboard';
import CardDetails from './Components/Pages/CardDetails';
import Purchases from './Components/Pages/Purchases';
import SoldCards from './Components/Pages/SoldCards';
import WatchList from './Components/Pages/WatchList';
import OurTeam from './Components/Pages/OurTeam';
import Faq from './Components/Pages/Faq';
import ContactUs from './Components/Pages/ContactUs';
import OurStory from './Components/Pages/OurStory';
import Blogs from './Components/Pages/Blogs';
import BlogInner from './Components/Pages/BlogInner';
import Videos from './Components/Pages/Videos';
import AccountSetting from './Components/Pages/AccountSetting';
import Membership from './Components/Pages/Membership';
import Terms from './Components/Pages/Terms';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import UserAgreement from './Components/Pages/UserAgreement';
import Disclaimer from './Components/Pages/Disclaimer';
import Advertise from './Components/Pages/Advertise';
import PassedMsg from "./Components/Pages/PassedMsg";
import AddACard from "./Components/Pages/AddCard";
import EditCard from "./Components/Pages/EditCard";
import SellingMethod from "./Components/Pages/SellingMethod";
import SellingMethodEdit from "./Components/Pages/SellingMethodEdit";
import CardPreview from "./Components/Pages/CardPreview";
import AddASet from "./Components/Pages/AddSet";
import AddABox from "./Components/Pages/AddBox";

class App extends Component {
  constructor(props){
    super(props);
    handleReqRes(this.props.history);
  }

  componentDidMount() {
    if (AuthService.isAuthRoutes(this.props.location.pathname) && !AuthService.getCurrentUser()) {
      AuthService.logout(this.props.history);
    };
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/intro" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/confirm-email" component={ConfirmEmail} />
          <Route path="/complete-profile/:user_id" component={CompleteProfile} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-link/:user_id/:otp" component={ResetPassword} />
          <Route path="/info" component={PassedMsg} />

          <Route path="/search" component={Search} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/dashboard" component={Dashboard} />          
          <Route path="/card-details" component={CardDetails} />
          <Route path="/purchases" component={Purchases} />
          <Route path="/sold-cards" component={SoldCards} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/team" component={OurTeam} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about" component={OurStory} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog-inner" component={BlogInner} />
          <Route path="/videos" component={Videos} />
          <Route path="/account-setting" component={AccountSetting} />
          <Route path="/membership-plan" component={Membership} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/user-agreement" component={UserAgreement} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/advertise" component={Advertise} />
          <Route path="/add-card" component={AddACard} />
          <Route path="/edit-card" component={EditCard} />
          <Route path="/selling-method" component={SellingMethod} />
          <Route path="/selling-method-edit" component={SellingMethodEdit} />
          <Route path="/card-preview" component={CardPreview} />
          <Route path="/add-set" component={AddASet} />
          <Route path="/add-box" component={AddABox} />
          <Route path="/" component={HomePage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
