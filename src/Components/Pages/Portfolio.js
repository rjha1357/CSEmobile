import React, { Component } from 'react';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import { Link } from 'react-router-dom';
import Header from '../Includes/Header';
import { displayDateFormat } from '../../Services/DateService';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount() {
        Axios.get(API_BASE_URL + "api/portfolio")
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    cards: data.cards
                });
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <Header pagename="Portfolio" history={this.props.history} />
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
                        <div className="container portfolioBtns">
                            <Link className="btn black modal-trigger" to="#sortModal">All (53)</Link>
                            <Link className="btn black btnCreateListing" to="#" >Create New Listing</Link>
                            <Link className="btn black" to="/manage-offer">Manage Offer</Link>
                        </div>
                        <div className="secCards mt-3">
                        {this.state.cards.map((card_details) =>
                            <div key={card_details.id} className="cardHBox mt-2">
                                <div className="container">
                                    <div className="cardInfo">
                                        <Link to="/card-details" className="cardHImg">
                                            <img src={API_BASE_URL + 'assets/upload/cards/' + card_details.user_id + '/' + card_details.card_image1} className="responsive-img" alt="" />
                                        </Link>
                                        <div className="cardHContent">
                                            <Link to="#" className="dropdown-button right" data-activates="dropdown100"><i className="material-icons">more_vert</i></Link>
                                            <ul id="dropdown100" className="dropdown-content">
                                                <li><Link to="#listedModal" className="green-text modal-trigger">Listed</Link></li>
                                                <li><Link to="/edit-card">Edit Details</Link></li>
                                                <li><Link to="#removeCard" className="red-text modal-trigger">Remove</Link></li>
                                            </ul>
                                            <Link to="/card-details"><h6>{card_details.card_name}</h6></Link>
                                            <ul className="cardInfoList m-0">
                                                <li>Date Added : <span> {displayDateFormat(card_details.created_at)}</span></li>
                                                <li>Purchase Price : <span className="green-text"> $123</span></li>
                                                <li>Current Price : <span className="green-text"> $270.00</span></li>
                                                <li>Change : <span className="green-text"> 177%</span></li>
                                                <li style={{ display: 'flex' }}><div className="mr-4">Viewers : <span className="green-text"> 17</span></div> <div>Watchers : <span className="green-text"> 77</span></div></li>
                                                <li className="statusLi"><div>Status : <span className="red-text"> Unlisted</span></div><Link to="#listedModal" className="modal-trigger black-text">+ Add to List</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}