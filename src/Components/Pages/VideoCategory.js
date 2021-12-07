import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

export default class VideoCtegory extends Component {
    render() {
        const options = {
            nav: false,
            rewind: true,
            autoplay: false,
            slideBy: 2,
        };
        
        return (
            <React.Fragment>
                <div className="secVideo">
                    <div className="container">
                        <div className="cardBoxHeader mb-2">
                            <h5>Become a Card Investor</h5>
                            <Link to="/videos-card-investor">View All Posts</Link>
                        </div>
                    </div>
                    <OwlCarousel className="videoPage" items={2} options={options} margin={15}>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </Link>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="secVideo">
                    <div className="container">
                        <div className="cardBoxHeader mb-2">
                            <h5>Portfolio Growth</h5>
                            <a href="/videos-portfolio">See More</a>
                        </div>
                    </div>
                    <OwlCarousel className="videoPage" items={2} options={options} margin={15}>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="secVideo">
                    <div className="container">
                        <div className="cardBoxHeader mb-2">
                            <h5>Long-Term Collecting</h5>
                            <a href="url">See More</a>
                        </div>
                    </div>
                    <OwlCarousel className="videoPage" items={2} options={options} margin={15}>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt=""  />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt=""  />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt=""  />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt=""  />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt=""  />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="secVideo">
                    <div className="container">
                        <div className="cardBoxHeader mb-2">
                            <h5>Quantitative Strategies</h5>
                            <a href="videos-quantitative">See More</a>
                        </div>
                    </div>
                    <OwlCarousel className="videoPage" items={2} options={options} margin={15}>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="secVideo">
                    <div className="container">
                        <div className="cardBoxHeader mb-2">
                            <h5>Current News and Events</h5>
                            <a href="url">See More</a>
                        </div>
                    </div>
                    <OwlCarousel className="videoPage" items={2} options={options} margin={15}>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video1.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/video-inner" className="videoBox">
                                <img src="./app-assets/img/video2.png" className="responsive-img" alt="" />
                                <span className="btnPlay"><i className="material-icons">play_arrow</i></span>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </React.Fragment>
        );
    }
}
