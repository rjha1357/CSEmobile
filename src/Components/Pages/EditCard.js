import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class EditCard extends Component {

    render() {
        const options = {
            nav: false,
            rewind: true,
            autoplay: false,
            slideBy: 1
        };
        return (
            <React.Fragment>
                <Header pagename="Edit A Card" history={this.props.history} />
                <main className="wrapper mb-0">
                    <div className="sec secInner">
                        <div className="container">
                            <form className="secForm">
                                <h6 className="controlHeading">Edit Images <span className="required red-text">*</span></h6>
                                <div className="cardPreview p-0 mb-4 white">
                                    <OwlCarousel className="preview-carousel owl-theme" dots={false} items={1} options={options} margin={15}>
                                        <div className="item">
                                            <img src="./app-assets/img/card1.png" className="img-fluid" alt="" />
                                            <Link className="closeImg"><img src="./app-assets/img/cancel.svg" alt="" /></Link>
                                        </div>
                                        <div className="item">
                                            <img src="./app-assets/img/card2.png" className="img-fluid" alt="" />
                                            <Link className="closeImg"><img src="./app-assets/img/cancel.svg" alt="" /></Link>
                                        </div>
                                        <div className="item">
                                            <img src="./app-assets/img/card3.png" className="img-fluid" alt="" />
                                            <Link className="closeImg"><img src="./app-assets/img/cancel.svg" alt="" /></Link>
                                        </div>
                                    </OwlCarousel>
                                </div>
                                <div className="file-field input-field customField">
                                    <input type="file" multiple id="gallery-photo-add" className="fileInput validate" />
                                    <div className="gallery">
                                        <div></div>
                                    </div>
                                </div>
                                <h6 className="controlHeading">Categories </h6>
                                <div className="customField">
                                    <label>Sport <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled>Select Sport</option>
                                        <option value="1" selected>Basketball</option>
                                        <option value="2">Baseball</option>
                                        <option value="3">Football</option>
                                        <option value="4">Hockey</option>
                                        <option value="5">Soccer</option>
                                    </select>
                                </div>
                                <div className="customField">
                                    <label>Year <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled>Select Year</option>
                                        <option value="1" selected>2009</option>
                                        <option value="2">2010</option>
                                        <option value="3">2011</option>
                                        <option value="4">2012</option>
                                        <option value="5">2013</option>
                                    </select>
                                </div>
                                <div className="customField">
                                    <label>Brand <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled>Select Brand</option>
                                        <option value="1" selected>Bowman</option>
                                        <option value="2">Bowman Chrome</option>
                                        <option value="3">Bowman Draft Picks & Prospects</option>
                                        <option value="4">Bowman Sterling</option>
                                        <option value="5">Finest</option>
                                    </select>
                                </div>
                                <h6 className="controlHeading">Card Details </h6>
                                <div className="input-field customField">
                                    <label className="active">Title <span className="required red-text">*</span></label>
                                    <input type="text" value="2013-14 Panini Crusade - Apprentice Signatures Gold #26 Khris Middleton AU, SN10" className="autocomplete validate" />
                                </div>
                                <div className="customField">
                                    <label>Team <span className="required red-text">*</span></label>
                                    <select>
                                        <option value="" disabled>Select Team</option>
                                        <option value="1" selected>Arizona Diamondbacks</option>
                                        <option value="2">Atlanta Braves</option>
                                        <option value="3">Australia</option>
                                        <option value="4">Baltimore Orioles</option>
                                        <option value="5">Boston Red Sox</option>
                                    </select>
                                </div>
                                <div className="input-field customField">
                                    <label>Player Name <span className="required red-text">*</span></label>
                                    <input placeholder="" value="De" type="text" className="validate" disabled />
                                </div>
                                <div className="input-field customField">
                                    <label>Variant <span className="required">(Optional)</span></label>
                                    <input placeholder="" value="Crusade - Apprentice Signatures Gold" type="text" className="validate" />
                                </div>
                                <div className="input-field customField">
                                    <label>Numbering <span className="required red-text">*</span></label>
                                    <input placeholder="" value="10" type="text" className="validate" />
                                </div>
                                <h6 className="controlHeading">Grading </h6>
                                <div className="input-field customField">
                                    <label>Grading Service <span className="required">(Optional)</span></label>
                                    <div className="select_wrap input-field">
                                        <ul className="default_option list-unstyled">
                                            <li>
                                                <div className="option psa">
                                                    <div className="icon"></div>
                                                    <p>PSA</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="select_ul list-unstyled">
                                            <li>
                                                <div className="option">
                                                    <p>EX: BGS, PSA, SGC, etc…</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="option psa">
                                                    <div className="icon"></div>
                                                    <p>PSA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="option bgs">
                                                    <div className="icon"></div>
                                                    <p>BGS</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="option sgc">
                                                    <div className="icon"></div>
                                                    <p>SGC</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="customField">
                                    <label>Numerical Grade <span className="required">(Optional)</span></label>
                                    <select>
                                        <option disabled>EX: 10, 9.5, 9, etc.</option>
                                        <option selected>10</option>
                                        <option>9.5</option>
                                        <option>9</option>
                                        <option>8.5</option>
                                        <option>8</option>
                                        <option>7.5</option>
                                        <option>7</option>
                                        <option>6.5</option>
                                        <option>6</option>
                                        <option>5.5</option>
                                        <option>5</option>
                                        <option>4.5</option>
                                        <option>4</option>
                                        <option>3.5</option>
                                        <option>3</option>
                                        <option>2.5</option>
                                        <option>2</option>
                                        <option>1.5</option>
                                        <option>1</option>
                                        <option>0.5</option>
                                    </select>
                                </div>
                                <h6 className="controlHeading">Item Condition <span className="required red-text">*</span></h6>
                                <div className="customField">
                                    <select>
                                        <option disabled>Select Item Condition</option>
                                        <option selected>Mint</option>
                                        <option>Near mint</option>
                                        <option>Good</option>
                                        <option>Poor</option>
                                    </select>
                                </div>
                                <h6 className="controlHeading">Rookie</h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input className="with-gap" name="rookie" type="radio" id="rookie1" checked />
                                        <label for="rookie1">Yes</label>
                                    </p>
                                    <p>
                                        <input className="with-gap" name="rookie" type="radio" id="rookie2" />
                                        <label for="rookie2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Autograph</h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input className="with-gap" name="autograph" type="radio" id="rookie1" checked />
                                        <label for="rookie1">Yes</label>
                                    </p>
                                    <p>
                                        <input className="with-gap" name="autograph" type="radio" id="rookie2" />
                                        <label for="rookie2">No</label>
                                    </p>
                                </div>
                                <div className="cardCheckbox">
                                    <p>
                                        <input className="with-gap" name="autograph" type="radio" id="autograph1" />
                                        <label for="autograph1">Yes</label>
                                    </p>
                                    <p>
                                        <input className="with-gap" name="autograph" type="radio" id="autograph2" checked />
                                        <label for="autograph2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Jersey</h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input className="with-gap" name="jersey" type="radio" id="jersey1" />
                                        <label for="jersey1">Yes</label>
                                    </p>
                                    <p>
                                        <input className="with-gap" name="autograph" type="radio" id="jersey2" checked />
                                        <label for="jersey2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Patch (Multi-Color Jersey) </h6>
                                <div className="cardCheckbox">
                                    <p>
                                        <input className="with-gap" name="patch" type="radio" id="patch1" />
                                        <label for="patch1">Yes</label>
                                    </p>
                                    <p>
                                        <input className="with-gap" name="patch" type="radio" id="patch2" checked />
                                        <label for="patch2">No</label>
                                    </p>
                                </div>
                                <h6 className="controlHeading">Description </h6>
                                <div className="input-field customField">
                                    <textarea id="textarea1" className="materialize-textarea">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</textarea>
                                </div>
                                <div className="center-align">
                                    <Link to="selling-method-edit" className="btn black w-100">Next</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}