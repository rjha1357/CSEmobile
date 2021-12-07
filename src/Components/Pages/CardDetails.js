import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import { Link } from 'react-router-dom';

export default class CardDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="NA" history={this.props.history} />
                <main className="wrapper" style={{ padding: "0", margin: "0" }}>
                    <div className="secInner">
                        <div className="cardPreview">
                            <div className="swiper-container">
                                <ul className="swiper-wrapper my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
                                    <li className="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                        <Link title="click to zoom-in" to="./app-assets/img/card1.png" itemprop="contentUrl" data-size="1200x600">
                                            <img src="./app-assets/img/card1.png" itemprop="thumbnail" alt="description" />
                                        </Link>
                                    </li>
                                    <li className="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                        <Link title="click to zoom-in" to="./app-assets/img/card2.png" itemprop="contentUrl" data-size="1200x600">
                                            <img src="./app-assets/img/card2.png" itemprop="thumbnail" alt="description" />
                                        </Link>
                                    </li>
                                </ul>
                                <div className="swiper-pagination"></div>
                                <div title="Prev" className="swiper-button-prev"></div>
                                <div title="Next" className="swiper-button-next"></div>
                            </div>
                            <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                                <div className="pswp__bg"></div>
                                <div className="pswp__scroll-wrap">
                                    <div className="pswp__container">
                                        <div className="pswp__item"></div>
                                        <div className="pswp__item"></div>
                                        <div className="pswp__item"></div>
                                    </div>
                                    <div className="pswp__ui pswp__ui--hidden">
                                        <div className="pswp__top-bar">
                                            <div className="pswp__counter"></div>
                                            <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                                            <button className="pswp__button pswp__button--share" title="Share"></button>
                                            <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                                            <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                                            <div className="pswp__preloader">
                                                <div className="pswp__preloader__icn">
                                                    <div className="pswp__preloader__cut">
                                                        <div className="pswp__preloader__donut"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                            <div className="pswp__share-tooltip"></div>
                                        </div>
                                        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                                        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                                        <div className="pswp__caption">
                                            <div className="pswp__caption__center"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="previewDetails">
                            <div className="dividverCards offerBox pt-0">
                                <div className="container">
                                    <h5 className="productHeading">2011-12 Panini Gold Standard 12 LeBron James SN299</h5>
                                    <h5 className="price green-text">$ 23.00</h5>
                                    <div className="descriptionBox mb-4">
                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <p className="hideDesc" style={{ display: "none" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        <Link to="#" className="btnSeeMore green-text">See More</Link>
                                    </div>
                                    <h5 className="heading m-0 mb-1">Product Details</h5>
                                    <ul className="cardDetailsList m-0">
                                        <li>Player Name: <span>Lebron James</span></li>
                                        <li>Brand: <span>Panini Gold Standard</span></li>
                                        <li>Variant: <span>Red</span></li>
                                    </ul>
                                    <ul className="cardDetailsList m-0" style={{ display: "none" }}>
                                        <li>Numbering: <span>0.5</span></li>
                                        <li>Listing: <span>Yes</span></li>
                                        <li>Team: <span>Baltimore Bullets</span></li>
                                        <li>Grading Service: <span>BGS</span></li>
                                        <li>Numerical Grade: <span>9</span></li>
                                        <li>Item Condition: <span>Near mint</span></li>
                                        <li>Sport: <span>Basketball</span></li>
                                    </ul>
                                    <Link to="#" className="productDetailsExpand green-text">See More</Link>
                                    <div className="my-3 d-flex">
                                        <Link to="/checkout" className="btn green w-50 mr-2">Buy Now</Link>
                                        <Link to="#" className="btn btnAddCart w-50 ml-2">Add to Cart</Link>
                                        <Link to="/cart-items" className="btn black btnViewCart w-50 ml-2">View Cart</Link>
                                    </div>
                                    <div className="subBtns">
                                        <div>
                                            <Link to="#" className="btnWatchlist">Add to Watchlist</Link>
                                            <Link to="#" className="btnRemoveWatchlist">Remove from Watchlist</Link>
                                        </div>
                                        <div>
                                            <Link to="/make-offer" className="">Place Offer</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dividverCards offerBox">
                                <div className="container">
                                    <div className="graphDetails">
                                        <p>Total Items Sold: <span className="blue-text">29</span></p>
                                        <p>52-Week Low: <span className="red-text">$ 1,059.61</span></p>
                                        <p>52-Week High: <span className="green-text">$ 6,4059.61</span></p>
                                    </div>
                                </div>
                                <div style={{ padding: "0 10px" }}>
                                    <div id="container" style={{ height: "250px", width: "100%" }}></div>
                                </div>
                            </div>
                            <div className="dividverCards offerBox">
                                <div className="container">
                                    <div className="userIBox">
                                        <div className="userIBoxImg">
                                            <img src="./app-assets/img/seller.svg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="userIBoxContent">
                                            <h6 className="m-0">Upperdeck_Owner</h6>
                                            <label className="mb-0">Austin, Texas.</label>
                                        </div>
                                        <img src="./app-assets/img/verifyLogo.svg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="sellerInfoBtns">
                                        <Link to="/seller-profile">View Other Listing</Link>
                                        <Link to="#messageToSeller" className="modal-trigger">Message Seller</Link>
                                        <Link to="#" className="btnFollows">Follow Seller</Link>
                                    </div>
                                </div>
                                <div className="container">
                                    <ul className="collapsible" data-collapsible="accordion">
                                        <li>
                                            <div className="collapsible-header"><h5 className="heading m-0">Seller Description</h5> <img src="./app-assets/img/right-arrow-angle.svg" alt="" /></div>
                                            <div className="collapsible-body">
                                                <p className="mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dividverCards offerBox">
                                <div className="container">
                                    <ul className="collapsible" data-collapsible="accordion">
                                        <li>
                                            <div className="collapsible-header"><h5 className="heading m-0">Shipping and Other Information</h5> <img src="./app-assets/img/right-arrow-angle.svg" alt="" /></div>
                                            <div className="collapsible-body">
                                                <ul className="pl-3 discList mt-2">
                                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="container">
                                <div className="cardBoxHeader">
                                    <h5>Similar Listing</h5>
                                    <Link className="textSeeAll" to="/seller-profile">See All
                                            <img src="./app-assets/img/down-arrow_green.svg" alt="" /></Link>
                                </div>
                            </div>
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
                    <div className="showSkeleton">
                        <div className="skeletonBox" style={{ width: "100%", height: "235px", marginBottom: "10px" }}></div>
                        <div style={{ padding: "0 15px", marginBottom: "15px" }}>
                            <div className="skeletonBox" style={{ width: "100%", height: "12px", marginBottom: "5px" }}></div>
                            <div className="skeletonBox" style={{ width: "90%", height: "12px", marginBottom: "5px" }}></div>
                            <div className="skeletonBox" style={{ width: "30%", height: "12px", marginBottom: "15px" }}></div>
                            <div className="skeletonBox" style={{ width: "100%", height: "12px", marginBottom: "5px" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 15px", boxShadow: "0 3px 0 rgba(136, 136, 136, 0.15)", paddingBottom: "10px", borderBottom: "1px solid #d4d4d4", marginBottom: "15px" }}>
                            <div className="skeletonBox"></div>
                            <div style={{ width: "100%" }}>
                                <div className="skeletonBox" style={{ width: "100%", height: "14px", marginBottom: "5px" }}></div>
                                <div className="skeletonBox" style={{ width: "70%", height: "14px", marginBottom: "10px" }}></div>
                                <div className="skeletonBox" style={{ width: "30%", height: "12px", marginBottom: "10px" }}></div>
                                <div className="skeletonBox" style={{ width: "100%", height: "12px", marginBottom: "5px" }}></div>
                                <div className="skeletonBox" style={{ width: "90%", height: "12px" }}></div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}