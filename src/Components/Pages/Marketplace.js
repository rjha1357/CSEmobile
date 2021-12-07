import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';

export default class Marketplace extends Component {

    componentDidMount() {
        window.AddToWatchlist();
    }
    
    render() {
        const sortBtn = {
            height: "31px",
            textTransform: "capitalize",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "31px",
            padding: "0 22px",
            letterSpacing: "0px"
        }
        return (
            <React.Fragment>
                <Header pagename="Marketplace" history={this.props.history} />
                <main className="wrapper pb-5">
                    <div className="secInner hideSkeleton">
                        <ul className="tabs headerTabs">
                            <li className="tab"><Link to="#all">All</Link></li>
                            <li className="tab"><Link className="active" to="#graded">Graded</Link></li>
                            <li className="tab"><Link to="#ungraded">Ungraded</Link></li>
                        </ul>
                    </div>
                    <div id="all" className="col s12">
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
                        <div className="container portfolioBtns" style={{ justifyContent: "flex-start" }}>
                            <Link className="btn modal-trigger sortBtn mr-2" sytle={sortBtn} to="#sortBy">Sort</Link>
                        </div>
                        <div className="secCards mt-3">
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card9.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card8.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card4.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card5.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="graded">
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
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="secCards mt-3">
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="secCards mt-3">
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ungraded">
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
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="secCards mt-3">
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <div className="secCards mt-3">
                            <div className="cardHBox">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src="./app-assets/img/card1.png" className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="/card-details"><h6>2020 Panini Prizm Baseball Trading Cards (Mega Box)</h6></Link>
                                            <ul className="cardHUl">
                                                <li>Price : <span className="green-text">$199.00</span></li>
                                                <li>YTD : <span className="blue-text">75.8%</span></li>
                                                <li>ALL : <span className="blue-text">75.8%</span></li>
                                            </ul>
                                            <div className="cardHBtns">
                                                <Link to="/checkout" className="btn green">Buy Now</Link>
                                                <Link to="#" className="btn btnAddCart">Add to Cart </Link>
                                                <Link to="/cart-items" className="btn btnViewCart">View Cart </Link>
                                                <Link to="/make-offer" className="btn">Make An Offer </Link>
                                            </div>
                                            <div className="cardHBottom mt-2">
                                                <Link to="#" className="btnAddWatch">+ Add to Watchlist</Link>
                                                <Link to="#" className="btnRemoveWatch">- Remove From Watchlist</Link>
                                                <Link to="/seller-profile" className="black-text ml-4">View Seller</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment >
        );
    }
}