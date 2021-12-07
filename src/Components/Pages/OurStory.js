import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';

export default class OurStory extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="About Card Stock Exchange" history={this.props.history} />
                <main className="wrapper">
                    <div className="secInner">
                        <div className="sec secBox">
                            <div className="container">
                                <p className="mt-0">In January of 2019, two Texas A&M classNamemates from the business and engineering schools and I incorporated Card Stock-Exchange, L.L.C., to create the world’s first online stock market for trading cards. Card Stock-Exchange, an idea conceptualized in high school and incorporated in college while at the Mays School of Business, has enjoyed early success; it was accepted into the highly selective Texas A&M McFerrin entrepreneurial program in 2018, my freshman year. I am learning with help from industry experts how to build a company from the ground up. After countless hours of building pitch decks, writing business and hiring plans and executive summaries, our hard work is beginning to pay off. We took 1st Place in the undergraduate category of the extremely prestigious 2019 Rice University Napier Launch Challenge and became finalists in the 2019 Texas A&M Aggie PITCH competition. In November 2019, Texas A&M selected us to represent our school at the esteemed and influential Blackstone Launchpad pitch competition in New York City. Twenty-four schools from across the country competed, with one team representing each school. We competed mostly against graduate students. After two strenuous days of competition, we placed in the Top 6 out of 24.</p>
                                <p> We plan to set the narrative for how trading cards are bought and sold. This platform will allow people throughout the world to buy and sell trading cards the same way they buy and sell stocks. They will be able to track and value their portfolio using investment tools like those used to track and value the stock market. Buying and selling trading cards will become accessible on a global scale through our platform.<br />With years of industry experience under our belt, we have the connections and industry knowledge to bring Card Stock-Exchange – a new stock market for trading cards – to the forefront of the alternate invest movement. We plan to bring authenticity and transparency to an industry that needs a central exchange. </p>
                                <p>With years of industry experience under our belt, we have the connections and industry knowledge to bring Card Stock-Exchange – a new stock market for trading cards – to the forefront of the alternate invest movement. We plan to bring authenticity and transparency to an industry that needs a central exchange.</p>
                            </div>
                        </div>
                        <div className="sec secBox">
                            <div className="container">
                                <div className="secAboutboxline">
                                    <div className="timelineBox">
                                        <div className="timelineImg p-2">
                                            <img src="http://dev.betadelivery.com/CSE/img/logo.svg" className="responsive-img" alt="" />
                                        </div>
                                        <div className="timelineContent">
                                            <h6>January 2019</h6>
                                            <p>Card Stock-Exchange L.L.C. Founded</p>
                                        </div>
                                    </div>
                                    <div className="timelineBox">
                                        <div className="timelineImg">
                                            <img src="http://dev.betadelivery.com/CSE/img/timeline3.jpg" className="responsive-img" alt="" />
                                        </div>
                                        <div className="timelineContent">
                                            <h6>November 2019</h6>
                                            <p>Competed in and placed in the top 6 at the Blackstone Launchpad Pitch Competition.</p>
                                        </div>
                                    </div>
                                    <div className="timelineBox">
                                        <div className="timelineImg">
                                            <img src="http://dev.betadelivery.com/CSE/img/mission.png" className="responsive-img" alt="" />
                                        </div>
                                        <div className="timelineContent">
                                            <h6>March 2019</h6>
                                            <p>Competed in and won the undergraduate division at the Rice University Napier launch pitch competition.</p>
                                        </div>
                                    </div>
                                    <div className="timelineBox">
                                        <div className="timelineImg p-2">
                                            <img src="http://dev.betadelivery.com/CSE/img/wdipllogo.png" className="responsive-img" alt="" />
                                        </div>
                                        <div className="timelineContent">
                                            <h6>June 2020</h6>
                                            <p>Began development on both website and mobile app using WDI Coding</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sec secBox">
                            <div className="container">
                                <div className="secHeading">
                                    <h6 className="subheading">what we stand for</h6>
                                    <h5 className="heading">Made by Collectors, For Collectors</h5>
                                </div>
                                <div className="collectorCards">
                                    <div className="card-image">
                                        <img src="http://dev.betadelivery.com/CSE/img/DataDrivan.png" className="responsive-img" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6 className="mt-0">Data Driven</h6>
                                        <p>We utilize years of historical card data to provide you with the best investment advice.</p>
                                    </div>
                                </div>
                                <div className="collectorCards">
                                    <div className="card-image black p-2">
                                        <img src="img/logo.svg" className="responsive-img" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6 className="mt-0">Honesty</h6>
                                        <p>Here at Card Stock Exchange, we hold honesty and integrity above all else. We strive to provide you advice and information that is backed by our proprietary formulas and software.</p>
                                    </div>
                                </div>
                                <div className="collectorCards">
                                    <div className="card-image">
                                        <img src="http://dev.betadelivery.com/CSE/img/analytics.png" className="responsive-img" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6 className="mt-0">Analytics</h6>
                                        <p>Data is useless unless you can read it! This is why we provide the data to you in the perfect format using key formulas and analytics to most accurately represent the data.</p>
                                    </div>
                                </div>
                                <div className="collectorCards">
                                    <div className="card-image">
                                        <img src="http://dev.betadelivery.com/CSE/img/community.png" className="responsive-img" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6 className="mt-0">Community</h6>
                                        <p>Above all, this industry is a community of individuals who all share a passion for buying, selling and collecting trading cards. We want to help grow this community and offer services and features never before brought to this industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sec secBox secOurmission mb-0">
                            <div className="container">
                                <div className="secHeading">
                                    <h5 className="heading">Our Mission</h5>
                                    <p>Our goal here at Card Stock Exchange is to revolutionize the way people everywhere invest in the “Tangible Asset” known as Trading Cards. Data and Analytics drive the teams of the favorite players you collect, so why not let it drive the way you invest in those players. Trading cards differ in so many ways yet each one has one thing in common, the joy and memories they spark within us. We share in your passion and want to help give this hobby the spark it needs. We want you to have the industry at your fingertips, the question is will you join us?</p>
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
