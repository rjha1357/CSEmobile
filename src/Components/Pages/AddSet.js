import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';

export default class AddASet extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Add A Set" history={this.props.history} />
                <main class="wrapper mb-0">
                    <div class="sec secInner">
                        <div class="container">
                            <form class="secForm">
                                <h6 class="controlHeading">Add Images <span class="required red-text">*</span></h6>
                                <div class="file-field input-field customField">
                                    <input type="file" multiple id="gallery-photo-add" class="fileInput validate" />
                                    <div class="cardGallery"></div>
                                </div>
                                <h6 class="controlHeading">Set Details</h6>
                                <div class="input-field customField">
                                    <label class="active">Title <span class="required red-text">*</span></label>
                                    <input type="text" class="autocomplete validate" />
                                </div>
                                <div class="customField">
                                    <label>Year <span class="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled selected>Select Year</option>
                                        <option value="1">2009</option>
                                        <option value="2">2010</option>
                                        <option value="3">2011</option>
                                        <option value="4">2012</option>
                                        <option value="5">2013</option>
                                    </select>
                                </div>
                                <div class="customField">
                                    <label>Sport <span class="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled selected>Select Sport</option>
                                        <option value="1">Basketball</option>
                                        <option value="2">Baseball</option>
                                        <option value="3">Football</option>
                                        <option value="4">Hockey</option>
                                        <option value="5">Soccer</option>
                                    </select>
                                </div>
                                <div class="customField">
                                    <label>Brand <span class="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled selected>Select Brand</option>
                                        <option value="1">Bowman</option>
                                        <option value="2">Bowman Chrome</option>
                                        <option value="3">Bowman Draft Picks & Prospects</option>
                                        <option value="4">Bowman Sterling</option>
                                        <option value="5">Finest</option>
                                    </select>
                                </div>
                                <h6 class="controlHeading">Description </h6>
                                <div class="input-field customField">
                                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                                </div>
                                <div class="center-align">
                                    <Link to="/selling-method" class="btn black w-100">Next</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}