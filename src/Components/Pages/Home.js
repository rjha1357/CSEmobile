import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Includes/Header';
import Sidebar from '../Includes/Sidebar';
import Footer from '../Includes/Footer';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import AuthService from '../Auth/Auth.service';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all_trendings: [],
            all_recently_views: [],
            all_watchlist: [],
            userValues: AuthService.getCurrentUser()
        }
    }

    componentDidMount() {
        window.AddToWatchlist();
        Axios.get(API_BASE_URL + "api/top-trending")
            .then(({ data }) => {
                // console.log(data);
                this.setState({
                    all_trendings: data
                });
            }).catch(err => console.log(err));

        const { userValues } = this.state;
        if (userValues) {
            Axios.get(API_BASE_URL + "api/recently-views/" + userValues?.users_id)
                .then(({ data }) => {
                    // console.log(data);
                    this.setState({
                        all_recently_views: data
                    });
                }).catch(err => console.log(err));

            Axios.get(API_BASE_URL + "api/watchlist/" + userValues?.users_id)
                .then(({ data }) => {
                    // console.log(data);
                    this.setState({
                        all_watchlist: data
                    });
                }).catch(err => console.log(err));
        }
    }
    render() {
        const options = {
            nav: false,
            rewind: true,
            autoplay: false,
            slideBy: 1
        };
        return (
            <React.Fragment>
                <Header pagename="home" history={this.props.history} />
                <Sidebar />
                <main className="wrapper">
                    <div className="secBanner hideSkeleton">
                        <div className="container center-align">
                            <h5>The global Trading<br /> Card Marketplace</h5>
                            <form className="position-relative">
                                <div className="input-group searchBox">
                                    <input className="form-control" type="text" placeholder="Search Card, Player, Team etc." aria-label="Search" />
                                    <div className="input-group-append">
                                        <Link to="/search" className="input-group-text">Search</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hideSkeleton">
                        <ul className="tabs homeTabs">
                            <li key="key1" className="tab">
                                <Link className="active" to="#tabAll">All</Link>
                            </li>
                            <li key="key2" className="tab">
                                <Link to="#tabCards">Cards</Link>
                            </li>
                            <li key="key3" className="tab">
                                <Link to="#tabBoxes">Boxes</Link>
                            </li>
                            <li key="key4" className="tab">
                                <Link to="#tabSets">Sets</Link>
                            </li>
                        </ul>
                        <div id="tabAll">
                            <div className="secCards pt-2">
                                <div className="container">
                                    <div className="cardBoxHeader">
                                        <h5>Top Trending Cards</h5>
                                        <Link className="textSeeAll" to="/toptrendig">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                    </div>
                                </div>
                                {this.state.all_trendings.length > 0 && (
                                    <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                        {this.state.all_trendings.map((trending_cards) => {
                                            return (
                                                <div key={trending_cards.id} className="item">
                                                    <div className="cardBox">
                                                        <Link to="/card-details" className="cardBoxImg">
                                                            <img src={API_BASE_URL + 'assets/upload/cards/' + trending_cards.user_id + '/' + trending_cards.card_image1} className="img-fluid" alt="" />
                                                        </Link>
                                                        <div className="cardContent">
                                                            <Link to="/card-details"><h6>{trending_cards.card_name}</h6></Link>
                                                            <p className="cardPrice green-text textBold">${trending_cards.selling_price}</p>
                                                            <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                            <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>
                                )}

                                {this.state.userValues != null ?
                                    <div className="secCards pt-2">
                                        <div className="container">
                                            <div className="cardBoxHeader">
                                                <h5>Recently Viewed</h5>
                                                <Link className="textSeeAll" to="/recently-viewed">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <OwlCarousel className="card-carousel" dots={false} items={2} options={options} margin={15}>
                                        {this.state.all_recently_views.map((recent_view) => {
                                            return (
                                                <div key={recent_view.id} className="item">
                                                    <div className="cardBox">
                                                        <Link to="/card-details" className="cardBoxImg">
                                                            <img src={API_BASE_URL + 'assets/upload/cards/' + recent_view.user_id + '/' + recent_view.card_image1} className="img-fluid" alt="" />
                                                        </Link>
                                                        <div className="cardContent">
                                                            <Link to="/card-details"><h6>{recent_view.card_name}</h6></Link>
                                                            <p className="cardPrice green-text textBold">${recent_view.selling_price}</p>
                                                            <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                            <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        </OwlCarousel>
                                    </div>
                                    : <div style={{textAlign:"center",fontWeight:"500"}}>No Data for recently views</div>}

                                {this.state.userValues != null ?
                                <div className="secCards pt-2">
                                    <div className="container">
                                        <div className="cardBoxHeader">
                                            <h5>Your Watchlist</h5>
                                            <Link className="textSeeAll" to="/watchlist">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <OwlCarousel className="card-carousel" dots={false} items={2} options={options} margin={15}>
                                    {this.state.all_watchlist.map((watchlist) => {
                                            return (
                                                <div key={watchlist.id} className="item">
                                                    <div className="cardBox">
                                                        <Link to="/card-details" className="cardBoxImg">
                                                            <img src={API_BASE_URL + 'assets/upload/cards/' + watchlist.user_id + '/' + watchlist.card_image1} className="img-fluid" alt="" />
                                                        </Link>
                                                        <div className="cardContent">
                                                            <Link to="/card-details"><h6>{watchlist.card_name}</h6></Link>
                                                            <p className="cardPrice green-text textBold">${watchlist.selling_price}</p>
                                                            
                                                            <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                            <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}                                        
                                    </OwlCarousel>
                                </div>
                                : <div style={{textAlign:"center",fontWeight:"500"}}>No Data for watchlist</div>}
                            </div>
                        </div>
                        <div id="tabCards">
                            <div className="secCards pt-2">
                                <div className="container">
                                    <div className="cardBoxHeader">
                                        <h5>Top Trending Cards</h5>
                                        <Link className="textSeeAll" to="/toptrendig">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card1.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card4.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="secCards pt-2">
                                    <div className="container">
                                        <div className="cardBoxHeader">
                                            <h5>Recently Viewed</h5>
                                            <Link className="textSeeAll" to="/recently-viewed">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card9.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card8.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card7.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card6.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                                <div className="secCards pt-2">
                                    <div className="container">
                                        <div className="cardBoxHeader">
                                            <h5>Your Watchlist</h5>
                                            <Link className="textSeeAll" to="/watchlist">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card4.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card5.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                        <div id="tabBoxes">
                            <div className="secCards pt-2">
                                <div className="container">
                                    <div className="cardBoxHeader">
                                        <h5>Top Trending Cards</h5>
                                        <Link className="textSeeAll" to="/toptrendig">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card1.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card4.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="secCards pt-2">
                                    <div className="container">
                                        <div className="cardBoxHeader">
                                            <h5>Recently Viewed</h5>
                                            <Link className="textSeeAll" to="/recently-viewed">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card9.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card8.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card7.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card6.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                                <div className="secCards pt-2">
                                    <div className="container">
                                        <div className="cardBoxHeader">
                                            <h5>Your Watchlist</h5>
                                            <Link className="textSeeAll" to="/watchlist">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card4.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card5.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                        <div id="tabSets">
                            <div className="secCards pt-2">
                                <div className="container">
                                    <div className="cardBoxHeader">
                                        <h5>Top Trending Cards</h5>
                                        <Link className="textSeeAll" to="/toptrendig">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card1.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cardBox">
                                            <Link to="/card-details" className="cardBoxImg">
                                                <img src="./app-assets/img/card4.png" className="img-fluid" alt="" />
                                            </Link>
                                            <div className="cardContent">
                                                <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                <p>19Lukdonrc268</p>
                                                <p className="cardPrice green-text textBold">$132.00</p>
                                                <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="secCards pt-2">
                                    <div className="container">
                                        <div className="cardBoxHeader">
                                            <h5>Recently Viewed</h5>
                                            <Link className="textSeeAll" to="/recently-viewed">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card9.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card8.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card7.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card6.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text addWatchText">+ Add to Watchlist</Link>
                                                    <Link to="#" className="green-text removeWatchText" style={{ display: "none" }}>- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                                <div className="secCards pt-2">
                                    <div className="container">
                                        <div className="cardBoxHeader">
                                            <h5>Your Watchlist</h5>
                                            <Link className="textSeeAll" to="/watchlist">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <OwlCarousel className="card-carousel owl-theme" dots={false} items={2} options={options} margin={15}>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card4.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="cardBox">
                                                <Link to="/card-details" className="cardBoxImg">
                                                    <img src="./app-assets/img/card5.png" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="cardContent">
                                                    <Link to="/card-details"><h6>2020 Garbage Pail Kids: Crash Gordon 40th Anniversary</h6></Link>
                                                    <p>19Lukdonrc268</p>
                                                    <p className="cardPrice green-text textBold">$132.00</p>
                                                    <Link to="#" className="green-text removeWatchItem">- Remove from Watchlist</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="secCards mb-0 hideSkeleton dividverCards p-0">
                        <div className="container">
                            <div className="cardBoxHeader">
                                <h5>Featured Sellers</h5>
                            </div>
                        </div>
                        <OwlCarousel className="seller-carousel owl-theme" dots={false} items={1} options={options} margin={15}>
                            <div className="item">
                                <Link to="/seller-profile" className="sellerBox">
                                    <div className="sellerBoxImg">
                                        <img src="./app-assets/img/seller1.png" className="img-fluid" alt="" />
                                        <div className="sellerImgOverlay">
                                            <img src="./app-assets/img/sellerUser.svg" className="bannerImg" alt="" />
                                            <h5>Upperdeck</h5>
                                            <span><img src="./app-assets/img/favicon.png" alt="" /> verified</span>
                                        </div>
                                    </div>
                                    <div className="sellerContent">
                                        <ul className="list-unstyled followList">
                                            <li key="key5" >
                                                <span className="followerCount">1000</span>
                                                <h6>Followers</h6>
                                            </li>
                                            <li key="key6" >
                                                <span className="followerCount">1000</span>
                                                <h6>Following</h6>
                                            </li>
                                            <li key="key7" >Member Since: January 2019</li>
                                        </ul>
                                        <div className="sellerHead">
                                            <h6>Message Seller</h6>
                                            <h6>Follow Seller</h6>
                                        </div>
                                        <ul className="list-unstyled ratingList">
                                            <li key="key8" className="red-text">
                                                <span>Negative</span>
                                                <div className="stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </li>
                                            <li key="key9" className="green-text">
                                                <span>Positive</span>
                                                <div className="stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </li>
                                            <li key="key10" className="yellow-text">
                                                <span>Netural</span>
                                                <div className="stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/seller-profile" className="sellerBox">
                                    <div className="sellerBoxImg">
                                        <img src="./app-assets/img/seller2.png" className="img-fluid" alt="" />
                                        <div className="sellerImgOverlay">
                                            <img src="./app-assets/img/sellerUser.svg" className="bannerImg" alt="" />
                                            <h5>Upperdeck</h5>
                                            <span><img src="./app-assets/img/favicon.png" alt="" /> verified</span>
                                        </div>
                                    </div>
                                    <div className="sellerContent">
                                        <ul className="list-unstyled followList">
                                            <li key="key11" >
                                                <span className="followerCount">1000</span>
                                                <h6>Followers</h6>
                                            </li>
                                            <li key="key12" >
                                                <span className="followerCount">1000</span>
                                                <h6>Following</h6>
                                            </li>
                                            <li key="key13" >Member Since: January 2019</li>
                                        </ul>
                                        <div className="sellerHead">
                                            <h6>Message Seller</h6>
                                            <h6>Follow Seller</h6>
                                        </div>
                                        <ul className="list-unstyled ratingList">
                                            <li key="key14" className="red-text">
                                                <span>Negative</span>
                                                <div className="stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </li>
                                            <li key="key15" className="green-text">
                                                <span>Positive</span>
                                                <div className="stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </li>
                                            <li key="key16" className="yellow-text">
                                                <span>Netural</span>
                                                <div className="stars">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="sec hideSkeleton">
                        <div className="container center-align">
                            <h5 className="heading">Product Release & Event Calendar</h5>
                            <p>Scroll, click, or navigate to a different url, and all the devices will follow. If you don't like this behaviour you can easily turn it off from the settings.</p>
                        </div>
                    </div>
                    <div className="secCalendar hideSkeleton">
                        <div className="calendar hidden-print">
                            <div className="caledarHeader">
                                <Link to="" className="btnLeft"><img src="./app-assets/img/down-arrow_white.svg" alt="" /></Link>
                                <h6 className="month">MM</h6>
                                <Link to="" className="btnRight"><img src="./app-assets/img/down-arrow_white.svg" alt="" /></Link>
                            </div>
                            <table>
                                <thead className="event-days">
                                    <tr></tr>
                                </thead>
                                <tbody className="event-calendar">
                                    <tr className="1"></tr>
                                    <tr className="2"></tr>
                                    <tr className="3"></tr>
                                    <tr className="4"></tr>
                                    <tr className="5"></tr>
                                </tbody>
                            </table>
                            <div className="list"></div>
                        </div>
                    </div>
                    <div className="container d-flex hideSkeleton pt-4 pb-5">
                        <button className="btn black w-50 p-0 mr-2">Sponsor Event</button>
                        <button className="btn black w-50 p-0 ml-2">Advertise With</button>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}