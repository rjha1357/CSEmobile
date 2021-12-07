import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';

export default class AddABox extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Add A Box" history={this.props.history} />
                <main className="wrapper mb-0">
                    <div className="sec secInner">
                        <div className="container">
                            <form className="secForm">
                                <h6 className="controlHeading">Add Images <span className="required red-text">*</span></h6>
                                <div className="file-field input-field customField">
                                    <input type="file" multiple id="gallery-photo-add" className="fileInput validate" />
                                    <div className="cardGallery"></div>
                                </div>
                                <h6 className="controlHeading">Title <span className="required red-text">*</span></h6>
                                <div className="input-field customField">
                                    <input type="text" className="autocomplete validate" />
                                </div>
                                <h6 className="controlHeading">Box Details </h6>
                                <div className="customField">
                                    <label>Year <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled selected>Select Year</option>
                                        <option value="1">2009</option>
                                        <option value="2">2010</option>
                                        <option value="3">2011</option>
                                        <option value="4">2012</option>
                                        <option value="5">2013</option>
                                    </select>
                                </div>
                                <div className="customField">
                                    <label>Company <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled selected>Select Company</option>
                                        <option value="1">2009</option>
                                        <option value="2">2010</option>
                                        <option value="3">2011</option>
                                        <option value="4">2012</option>
                                        <option value="5">2013</option>
                                    </select>
                                </div>
                                <div className="customField">
                                    <label>Sport <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled selected>Select Sport</option>
                                        <option value="1">Basketball</option>
                                        <option value="2">Baseball</option>
                                        <option value="3">Football</option>
                                        <option value="4">Hockey</option>
                                        <option value="5">Soccer</option>
                                    </select>
                                </div>

                                <div className="customField">
                                    <label>Brand <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled selected>Select Brand</option>
                                        <option value="1">Bowman</option>
                                        <option value="2">Bowman Chrome</option>
                                        <option value="3">Bowman Draft Picks & Prospects</option>
                                        <option value="4">Bowman Sterling</option>
                                        <option value="5">Finest</option>
                                    </select>
                                </div>
                                <h6 className="controlHeading">Description </h6>
                                <div className="input-field customField">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                </div>
                                <div className="center-align">
                                    <Link to="/selling-method" className="btn black w-100">Next</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}