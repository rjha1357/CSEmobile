import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';

export default class SellingMethodEdit extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Edit Selling Method" history={this.props.history} />
                <main className="wrapper mb-0">
                    <div className="sec secInner">
                        <div className="container">
                            <form className="secForm">
                                <div className="input-field customField">
                                    <label>List <span className="required red-text">*</span></label>
                                    <div className="cardCheckbox">
                                        <p>
                                            <input className="with-gap" name="list" type="radio" id="list1" checked />
                                            <label for="list1">Yes</label>
                                        </p>
                                        <p>
                                            <input className="with-gap" name="list" type="radio" id="list2" />
                                            <label for="list2">No</label>
                                        </p>
                                    </div>
                                </div>
                                <div className="input-field customField">
                                    <label>Selling Price <span className="required red-text">*</span></label>
                                    <input type="text" value="677.00" className="validate" />
                                </div>
                                <div className="input-field customField">
                                    <label>Allow offer <span className="required red-text">*</span></label>
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
                                    <Link to="card_preview_edit.php" className="btn green w-50 mr-1">Preview</Link>
                                    <Link to="edit_card.php" className="btn black w-50 ml-1">Back</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}