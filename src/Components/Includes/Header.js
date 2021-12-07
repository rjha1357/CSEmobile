import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    componentDidMount() {
        //console.log('header props', this.props);
        window.navSidebar();
        // window.switchTabs();
    }
    render() {
        const customheader = this.props.pagename;
        return (
            <React.Fragment>
                {customheader === "home" ? (
                    <header className="custom-header">
                        <nav className="pageHeader homeHeader">
                            <div className="nav-wrapper">
                                <div className="navLeft">
                                    <Link to="#" data-activates="slide-out" className="button-collapse"><img alt="" src="./app-assets/img/menu.svg" /></Link>
                                    <img alt="" src="./app-assets/img/logo.svg" className="logo" loading="lazy" />
                                </div>
                                <div className="navRight">
                                    <Link to="/notification" className="ml-4"><img alt="" src="./app-assets/img/bell.svg" /> <span className="badge notificationBadge">3</span></Link>
                                    <Link to="/messages"><img alt="" src="./app-assets/img/envelope.svg" /> <span className="badge notificationBadge">2</span></Link>
                                    <Link to="/cart-items"><img alt="" src="./app-assets/img/shopping-cart.svg" /></Link>
                                </div>
                            </div>
                        </nav>
                    </header>
                ) : customheader === "NA" ? (
                    <header className="custom-header" style= {{background: "transparent"}}>
                        <nav className="pageHeader innerHeader" style= {{boxShadow: "none"}}>
                            <Link to="#" className="btnGoBack" onClick={() => {this.props.history.goBack(); }}><img src="./app-assets/img/left-arrow.svg" alt="" /></Link>
                        </nav>
                    </header>
                ) : (
                    <header className="custom-header">
                        <nav className="pageHeader innerHeader">
                            <Link to="#" className="btnGoBack" onClick={() => {this.props.history.goBack(); }}><img src="./app-assets/img/left-arrow.svg" alt="" /></Link>
                            <h5>{customheader}</h5>
                        </nav>
                    </header>
                )}


            </React.Fragment>
        );
    }
}