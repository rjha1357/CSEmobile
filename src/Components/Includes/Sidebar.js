import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthService from '../Auth/Auth.service';

class Sidebar extends Component {
    
    render() {
        const userValues = AuthService.getCurrentUser();
        let loggedInDiv;
        if (userValues) {
            loggedInDiv = <div className="userView">
                <img alt="" className="circle" src="./app-assets/img/sellerUser.svg" />
                <div className="userViewRight">
                    <h5>{userValues.username}</h5>
                    <Link to="#" onClick={() => { window.closeSidebar(); AuthService.logout(this.props.history) }} >Sign Out</Link>
                </div>
            </div>
        } else {
            loggedInDiv = <div className="userView" style={{display: "flex",alignItems: "center", marginBottom: "0px",background: "#000",padding: "15px"}}>
                <img alt="" className="circle" src="./app-assets/img/sellerUser.svg" style={{marginRight: "10px",border: "1px solid #FFF" }}/>
                <div className="userViewRight">
                    <Link to="/login" onClick={()=>window.closeSidebar()} >Login</Link>
                </div>
            </div>
        }
        return (
            <React.Fragment>
                <ul id="slide-out" className="side-nav" style={{ transform: "translateX(-100%)" }}>
                    <li>
                        {loggedInDiv}
                        <Link to="#" data-activates="slide-out" className="btnCloseSidebar"><img alt="" src="./app-assets/img/cancel_white.svg" /></Link>

                    </li>
                    <li className=""><Link to="/marketplace" onClick={()=>window.closeSidebar()} >Marketplace</Link></li>
                    <li className=""><Link to="/portfolio" onClick={()=>window.closeSidebar()} >Portfolio</Link></li>
                    <li className="divider"></li>
                    <li className=""><Link to="/dashboard" onClick={()=>window.closeSidebar()} >Dashboard</Link></li>                    
                    <li className=""><Link to="/purchases" onClick={()=>window.closeSidebar()} >Purchases</Link></li>
                    <li className=""><Link to="/sold-cards" onClick={()=>window.closeSidebar()} >Sold Cards</Link></li>
                    <li className=""><Link to="/watchlist" onClick={()=>window.closeSidebar()} >Your Watchlist</Link></li>
                    <li className="divider"></li>
                    <li className=""><Link to="/team" onClick={()=>window.closeSidebar()} >Our Team</Link></li>
                    <li className=""><Link to="/faq" onClick={()=>window.closeSidebar()} >FAQ's</Link></li>
                    <li className=""><Link to="/contact-us" onClick={()=>window.closeSidebar()} >Contact Us</Link></li>
                    <li className=""><Link to="/about" onClick={()=>window.closeSidebar()} >Our Story</Link></li>
                    <li className="divider"></li>
                    <li className=""><Link to="/blogs" onClick={()=>window.closeSidebar()} >Blogs</Link></li>
                    <li className=""><Link to="/videos" onClick={()=>window.closeSidebar()} >Videos</Link></li>
                    <li className="divider"></li>
                    <li className=""><Link to="/account-setting" onClick={()=>window.closeSidebar()} >Account Setting</Link></li>
                    <li className=""><Link to="/membership-plan" onClick={()=>window.closeSidebar()} >Membership Plan</Link></li>
                    <li className="divider"></li>
                    <li className=""><Link to="/terms" onClick={()=>window.closeSidebar()} >Terms and Conditions</Link></li>
                    <li className=""><Link to="/privacy-policy" onClick={()=>window.closeSidebar()} >Privacy Policy</Link></li>
                    <li className=""><Link to="/user-agreement" onClick={()=>window.closeSidebar()} >User Agreement</Link></li>
                    <li className=""><Link to="/disclaimer" onClick={()=>window.closeSidebar()} >Disclaimer</Link></li>
                    <li className=""><Link to="/advertise" onClick={()=>window.closeSidebar()} >Advertise</Link></li>
                </ul>
            </React.Fragment>
        );
    }
}
export default withRouter(Sidebar);