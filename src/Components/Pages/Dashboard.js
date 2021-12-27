import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import AuthService from '../Auth/Auth.service';
// import { toastrWarning } from '../../Services/ToasterService';
import { API_PATH_URL } from '../../Config/Config';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Dashboard extends Component {
    componentDidMount() {
        if (AuthService.getCurrentUser() === null) {
            //toastrWarning('Session Expired.');
            // this.props.history.push('/login');
            console.log('home');
        } else {
        }
    }

    render() {
        const userValues = AuthService.getCurrentUser();
        const options = {
            nav: false,
            rewind: true,
            autoplay: false,
            slideBy: 1,
            dots: false,
        };
        // const bannerImage = userValues.banner_image;
        // let img;
        // if(bannerImage == null || bannerImage == ''){
        //     img = `${API_PATH_URL}bannerImage.png`;
        // }else{
        //     img = `${API_PATH_URL}${userValues?.users_id}/${userValues?.banner_image}`;
        // }

        return (
            <React.Fragment>
                <Header pagename="NA" history={this.props.history} />
                <main className="wrapper" style={{ padding: "0" }}>
                    <div className="secInner hideSkeleton">
                        <div className="secInnerSeller">
                            <OwlCarousel className="sellerInner-carousel" items={1} options={options}>
                                <div className="item userProfileBanner">
                                    <div className="userProfileEdit">
                                        <img src="./app-assets/img/pen_white.svg" alt="" />
                                    </div>
                                    <input type='file' />
                                    <img src="./app-assets/img/sellerimg.png" className="img-fluid uploadImgs" alt="" />
                                </div>
                                <div className="item userProfileBanner">
                                    <div className="userProfileEdit">
                                        <img src="./app-assets/img/pen_white.svg" alt="" />
                                    </div>
                                    <input type='file' />
                                   
                                    <img src="./app-assets/img/sellerimg.png" className="img-fluid uploadImgs" alt="profile background" />
                                </div>
                            </OwlCarousel>
                            <div className="userProfile">
                                <div className="userProfileEdit">
                                    <img src="./app-assets/img/pen_white.svg" alt="" />
                                </div>
                                <input type='file' />
                                <img className="userProfileImg uploadImgs" src={`${API_PATH_URL}${userValues?.users_id}/${userValues?.profile_image}`} alt={userValues?.profile_image} />
                            </div>
                        </div>
                    </div>
                    <div className="secRating">
                        <div className="userProfileInfo">
                            <div className="container">
                                <div className="center-align">
                                    <h5 className="mt-4 mb-0">{userValues?.username}</h5>
                                    <span className="verifiedUser"><img src="./app-assets/img/verifyLogo.svg" alt="" /> verified</span>
                                </div>
                                <div className="userProfileRight">
                                    <ul className="m-0">
                                        <li className="followers">
                                            <Link to="/followers">
                                                <span className="spanCount">1000</span>
                                                <h6>Followers</h6>
                                            </Link>
                                        </li>
                                        <li className="followers">
                                            <Link to="/followers">
                                                <span className="spanCount">1000</span>
                                                <h6>Followings</h6>
                                            </Link>
                                        </li>
                                    </ul>
                                    <p className="my-2 center-align">Member Since: January 2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <ul className="starsList">
                                <li className="red-text">
                                    <span>Negative(01)</span>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </li>
                                <li className="green-text">
                                    <span>Positive(25)</span>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </li>
                                <li className="yellow-text">
                                    <span>Netural(03)</span>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </li>
                            </ul>
                            <ul className="progressBox starsList">
                                <li>
                                    <div className="progress" data-percentage="50">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>500</div>
                                        </div>
                                    </div>
                                    <h6>No of Cards</h6>
                                </li>
                                <li>
                                    <div className="progress" data-percentage="40">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>400</div>
                                        </div>
                                    </div>
                                    <h6>No of Sets</h6>
                                </li>
                                <li>
                                    <div className="progress" data-percentage="100">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>1000</div>
                                        </div>
                                    </div>
                                    <h6>No of Box</h6>
                                </li>
                            </ul>
                        </div>
                        <div className="sellerDescription">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-2">
                                    <h5>Seller Description</h5>
                                    <Link to="#editDescription" className="modal-trigger">
                                        <img src="./app-assets/img/pen.svg" className="editIcon" alt="" /> Edit</Link>
                                </div>
                                <div className="descriptionBox">
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <p className="hideDesc" style={{ display: "none" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <Link to="#" className="btnSeeMore green-text">See More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="dividverCards">
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Recently Added</h5>
                                    <Link className="textSeeAll" to="/recently_added">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
                            <OwlCarousel className="card-carousel" items={2} options={options}>
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
                        </div>
                        <div className="dividverCards">
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Your Listing</h5>
                                    <Link className="textSeeAll" to="/your-listing">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
                            <OwlCarousel className="card-carousel" items={2} options={options}>
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
                                <div className="item">
                                    <div className="cardBox">
                                        <Link to="/card-details" className="cardBoxImg">
                                            <img src="./app-assets/img/card5.png" className="img-fluid" alt="" />
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
                        </div>
                        <div className="dividverCards">
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Recently Viewed</h5>
                                    <Link className="textSeeAll" to="/recently-viewed">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
                            <OwlCarousel className="card-carousel" items={2} options={options}>
                                <div className="item">
                                    <div className="cardBox">
                                        <Link to="/card-details" className="cardBoxImg">
                                            <img src="./app-assets/img/card5.png" className="img-fluid" alt="" />
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
                                            <img src="./app-assets/img/card7.png" className="img-fluid" alt="" />
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
                                            <img src="./app-assets/img/card8.png" className="img-fluid" alt="" />
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
                                            <img src="./app-assets/img/card9.png" className="img-fluid" alt="" />
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
                        </div>
                        <div className="dividverCards">
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Your Watchlist</h5>
                                    <Link className="textSeeAll" to="/watchlist">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
                            <OwlCarousel className="card-carousel" items={2} options={options}>
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
                                            <img src="./app-assets/img/card6.png" className="img-fluid" alt="" />
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
                                            <img src="./app-assets/img/card7.png" className="img-fluid" alt="" />
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
                        </div>
                        <div className="dividverCards">
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Your Purchase</h5>
                                    <Link className="textSeeAll" to="/purchases">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
                            <OwlCarousel className="card-carousel" items={2} options={options}>
                                <div className="item">
                                    <div className="cardBox">
                                        <Link to="/card-details" className="cardBoxImg">
                                            <img src="./app-assets/img/card5.png" className="img-fluid" alt="" />
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
                            </OwlCarousel>
                        </div>
                        <div className="dividverCards">
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Offers Sent</h5>
                                    <Link className="textSeeAll" to="/offers-sent">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
                            <OwlCarousel className="card-carousel" items={2} options={options}>
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
                        </div>
                        <div className="dividverCards">
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Offers Received</h5>
                                    <Link className="textSeeAll" to="/offers-received">See All <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
                            <OwlCarousel className="card-carousel" items={2} options={options}>
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
                                            <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
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
                                            <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
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
                                            <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
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
                                            <Link to="#" className="green-text removeWatchText">- Remove from Watchlist</Link>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment >
        );
    }
}