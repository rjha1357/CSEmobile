import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import { Link } from 'react-router-dom';

export default class Purchases extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Purchases" history={this.props.history} />
                <main className="wrapper pb-5">
                    <div className="secInner hideSkeleton">
                        <div className="tabSearchbar">
                            <div className="container">
                                <div className="input-field tabSearch">
                                    <input id="search" type="search" placeholder="Search Card, Player, Team etc." required />
                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                                <Link to="#" data-activates="filter-out" className="sidenav-trigger filter-collapse filter filter-nav">
                                    <img src="./app-assets/img/filter.svg" className="responsive-img" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="secCards mt-3">
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/order-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="#" className="dropdown-button right" data-activates="dropdown1"><i className="material-icons">more_vert</i></Link>
                                            <ul id="dropdown1" className="dropdown-content">
                                                <li><Link to="./app-assets/img/dummy.pdf" download>Download Invoice</Link></li>
                                                <li><Link to="/order-tracking">Track Order</Link></li>
                                                <li><Link to="#messageToSeller" className="modal-trigger">Send Message</Link></li>
                                                <li><Link to="#sellerFeedback" className="modal-trigger">Leave Seller Feedback</Link></li>
                                                <li><Link to="#reasonCancellation" className="red-text modal-trigger">Cancel Order</Link></li>
                                            </ul>

                                            <Link className="cardHeading" to="/order-details"><h6> 2010 Bowman Chrome USA Baseball USA-BC5 Gerrit Cole</h6></Link>
                                            <ul className="cardManageul mt-0">
                                                <li className="mb-1">Purchase Date : <span>12/10/2019</span></li>
                                                <li className="mb-1">Purchase Price : <span className="green-text">$11.00</span></li>
                                                <li className="mb-1">Order ID : <span>704293795544585</span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
