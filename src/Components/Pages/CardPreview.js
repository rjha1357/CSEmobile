import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class CardPreview extends Component {
    render() {
        const options = {
            nav: false,
            rewind: true,
            autoplay: false,
            slideBy: 1
        };
        return (
            <React.Fragment>
                <Header pagename="Confirm Listing" history={this.props.history} />
                <main className="wrapper mb-0">
                    <div className="secInner">
                        <div className="cardPreview">                            
                            <OwlCarousel className="preview-carousel owl-theme" dots={false} items={1} options={options}>
                                <div className="item">
                                    <img src="./app-assets/img/card1.png" className="img-fluid" alt="" />
                                </div>
                                <div className="item">
                                    <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                </div>
                                <div className="item">
                                    <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                </div>
                            </OwlCarousel>                        
                        </div>
                        <div className="previewDetails">
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
                                    <li>Numbering: <span>0.5</span></li>
                                    <li>Listing: <span>Yes</span></li>
                                </ul>
                                <ul className="cardDetailsList m-0" style={{ display: "none" }}>
                                    <li>Team: <span>Baltimore Bullets</span></li>
                                    <li>Grading Service: <span>BGS</span></li>
                                    <li>Numerical Grade: <span>9</span></li>
                                    <li>Item Condition: <span>Near mint</span></li>
                                    <li>Sport: <span>Basketball</span></li>
                                </ul>
                                <Link to="#" className="productDetailsExpand green-text">See More</Link>
                                <div className="center-align d-flex mt-4">
                                    <Link to="/portfolio" className="btn green w-50 mr-1">Confirm</Link>
                                    <Link to="/add-card" className="btn red w-50 ml-1">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}