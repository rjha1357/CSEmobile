import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import VideoCategory from './VideoCategory';
import { Link } from 'react-router-dom';

export default class Videos extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Videos" history={this.props.history} />
                <main className="wrapper pb-5">
                    <div className="secInner hideSkeleton">
                        <ul className="tabs headerTabs">
                            <li className="tab"><Link className="active" to="#tutorial-videos">How the site works-Tutorial Videos</Link></li>
                            <li className="tab"><Link to="#market-analysis">Market Analysis</Link></li>
                            <li className="tab"><Link to="#trading-card-news">Trading Card News</Link></li>
                            <li className="tab"><Link to="#interviews">Interviews</Link></li>
                        </ul>
                        <div id="tutorial-videos">
                            <div className="secVideos">
                                <iframe title="title1" width="100%" height="350" src="https://www.youtube.com/embed/yAoLSRbwxL8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                <VideoCategory />
                            </div>
                        </div><div id="market-analysis">
                            <div className="secVideos">
                                <iframe title="title2" width="100%" height="350" src="https://www.youtube.com/embed/yAoLSRbwxL8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                <VideoCategory />
                            </div>
                        </div>
                        <div id="trading-card-news">
                            <div className="secVideos">
                                <iframe title="title3" width="100%" height="350" src="https://www.youtube.com/embed/yAoLSRbwxL8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                <VideoCategory />
                            </div>
                        </div>
                        <div id="interviews">
                            <div className="secVideos">
                                <iframe title="title4" width="100%" height="350" src="https://www.youtube.com/embed/yAoLSRbwxL8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                <VideoCategory />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
