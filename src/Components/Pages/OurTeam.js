import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import { Link } from 'react-router-dom';

export default class OurTeam extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Our Awesome Crew" history={this.props.history} />
                <main className="wrapper">
                    <div className="sec secInner">
                        <div className="container">
                            <p className="mt-0">We are a small team of designers and front-end developers. We create digital products that will make your work faster and easier.</p>
                            <div className="crewBox">
                                <div className="crewImg">
                                    <img src="./app-assets/img/ZacharyLynch.jpg" className="responsive-img" alt="" />
                                </div>
                                <div className="crewContent">
                                    <h6>Zachary Lynch</h6>
                                    <span className="green-text">Founder</span>
                                    <div className="crewSocial">
                                        <Link to="https://www.linkedin.com/in/zachary-lynch-a67a04149/" target="_blank" className="crewSocialIcons crewLinked">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                    <div className="crewDescription">
                                        <p>Lifelong Memorabilia and Trading Card Collector</p>
                                        <p>B.B.A. Finance Texas A&amp;M </p>
                                    </div>
                                    <p className="crewFavorite">Favorite Sports Team: Texas A&amp;M </p>
                                </div>
                            </div>
                            <div className="crewBox">
                                <div className="crewImg">
                                    <img src="./app-assets/img/JosephEscobar.jpg" className="responsive-img" alt="" />
                                </div>
                                <div className="crewContent">
                                    <h6>Joseph Escobar</h6>
                                    <span className="green-text">Co-Founder</span>
                                    <div className="crewSocial">
                                        <Link to="https://www.linkedin.com/in/joseph-escobar-63b1aa166/" target="_blank" className="crewSocialIcons crewLinked">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                    <div className="crewDescription">
                                        <p>Vintage Trading Card Collector</p>
                                        <p>B.B.A. Finance Texas A&M </p>
                                    </div>
                                    <p className="crewFavorite">Favorite Sports Team: Texas A&M </p>
                                </div>
                            </div>
                            <div className="crewBox">
                                <div className="crewImg">
                                    <img src="./app-assets/img/MichaelGoeden.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="crewContent">
                                    <h6 className="mb-0">Michael Goeden</h6>
                                    <span className="text-success">Strategic Partner </span>
                                    <div className="crewSocial">
                                        <Link to="https://www.linkedin.com/in/michael-goeden-4857597/" target="_blank" className="crewSocialIcons crewLinked">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                    <div className="crewDescription">
                                        <p>Founder, Master the Game Sports </p>
                                    </div>
                                    <p className="crewFavorite">Favorite Sports Team: Georgia Bulldogs </p>
                                </div>
                            </div>
                            <div className="crewBox">
                                <div className="crewImg">
                                    <img src="./app-assets/img/ElizabethKarpati.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="crewContent">
                                    <h6 className="mb-0">Elizabeth Karpati </h6>
                                    <span className="text-success">Business Advisor </span>
                                    <div className="crewSocial">
                                        <Link to="https://www.linkedin.com/in/elizabeth-karpati-aab13933/" target="_blank" className="crewSocialIcons crewLinked">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                    <div className="crewDescription">
                                        <p>30+ Years Legal Experience</p>
                                    </div>
                                    <p className="crewFavorite">Favorite Sports Team: UNC Tarheels </p>
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
