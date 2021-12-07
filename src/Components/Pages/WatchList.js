import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import { Link } from 'react-router-dom';

export default class WatchList extends Component {
    componentDidMount() {
        window.AddToWatchlist();
    }
    render() {
        return (
            <React.Fragment>
                <Header pagename="Watchlist" history={this.props.history} />
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
                        <div className="container portfolioBtns" style={{justifyContent: "flex-start"}}>
                            <Link className="btn modal-trigger sortBtn mr-2" to="#sortBy">Sort</Link>
                            <Link className="btn black" to="/manage-offer">Manage Offer</Link>
                        </div>
                        <div className="secCards mt-3">
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link className="cardHeading" to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom">
                                                <Link to="#" className="removeWatchlist">- Remove From Watchlist</Link>
                                            </div>
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
