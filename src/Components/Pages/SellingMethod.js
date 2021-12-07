import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';

export default class SellingMethod extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Select Selling Method" history={this.props.history} />
                <main className="wrapper mb-0">
                    <div className="sec secInner">
                        <div className="container">
                            <form className="secForm">
                                <h6 className="controlHeading">List  <span className="required red-text">*</span></h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input className="with-gap" name="Listselling" type="radio" id="Listselling1" checked />
                                        <label for="Listselling1">Yes</label>
                                    </p>
                                    <p>
                                        <input className="with-gap" name="Listselling" type="radio" id="Listselling2" />
                                        <label for="Listselling2">No</label>
                                    </p>
                                </div>
                                <div className="input-field customField">
                                    <label>Selling Price <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" />
                                </div>
                                <h6 className="controlHeading">Allow offer <span className="required red-text">*</span></h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input className="with-gap" name="offer" type="radio" id="offer1" />
                                        <label for="offer1">Yes</label>
                                    </p>
                                    <p>
                                        <input className="with-gap" name="offer" type="radio" id="offer2" />
                                        <label for="offer2">No</label>
                                    </p>
                                </div>
                                <div className="input-field customField">
                                    <label>Best Offer Minimum</label>
                                    <input type="text" className="validate" disabled />
                                </div>
                                <div className="input-field customField">
                                    <label>Last Sale Price</label>
                                    <input type="text" className="validate" disabled />
                                </div>
                                <div className="input-field customField">
                                    <label>Shipping options</label>
                                    <input type="text" className="validate" disabled />
                                </div>
                                <div className="center-align d-flex">
                                    <Link to="/card-preview" className="btn green w-50 mr-1">Preview</Link>
                                    <Link to="/add-card" className="btn black w-50 ml-1">Back</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}