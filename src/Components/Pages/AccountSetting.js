import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import { Link } from 'react-router-dom';

export default class AccountSetting extends Component {
    render() {
        return (
            <React.Fragment>
                <Header pagename="Account Setting" history={this.props.history} />
                <main className="wrapper pb-5">
                    <div className="secInner">
                        <div className="settingBox">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-2">
                                    <h5>Change Password </h5>
                                </div>
                                <form className="secForm mt-3">
                                    <div className="input-field customField">
                                        <label>Current Password <span className="required red-text">*</span></label>
                                        <input id="password-field" type="password" className="validate passwordText" />
                                        <i toggle="#password-field" className="material-icons toggle-password">visibility_off</i>
                                    </div>
                                    <div className="input-field customField">
                                        <label>New Password <span className="required red-text">*</span></label>
                                        <input id="password-field1" type="password" className="validate passwordText" />
                                        <i toggle="#password-field1" className="material-icons toggle-password">visibility_off</i>
                                    </div>
                                    <div className="input-field customField">
                                        <label>Confirm Password <span className="required red-text">*</span></label>
                                        <input id="password-field2" type="password" className="validate passwordText" />
                                        <i toggle="#password-field2" className="material-icons toggle-password">visibility_off</i>
                                    </div>
                                    <div className="d-flex">
                                        <Link to="/selling-method" className="btn black">Submit</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="settingBox">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-3">
                                    <h5>User Information </h5>
                                    <Link to="/edit-profile"><img src="./app-assets/img/pen.svg" className="editIcon" alt="" /> Edit</Link>
                                </div>
                                <ul className="settingDetails">
                                    <li>Name : <span>Upperdeck</span></li>
                                    <li>Email : <span>Upperdeck@gmail.com</span></li>
                                    <li>Username : <span>Upperdeck_Store</span></li>
                                    <li>Password : <span>*****</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="settingBox">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-3">
                                    <h5>Shipping Information </h5>
                                    <Link to="/edit-billing-info"><img src="./app-assets/img/pen.svg" className="editIcon" alt="" /> Edit</Link>
                                </div>
                                <ul className="settingDetails">
                                    <li>Shipping Address : <span>Juhu, Bandra, Alabama, 35440</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="settingBox">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-3">
                                    <h5>Payment Information </h5>
                                    <Link to="/edit-payment-info"><img src="./app-assets/img/pen.svg" className="editIcon" alt="" /> Edit</Link>
                                </div>
                                <ul className="settingDetails">
                                    <li>Payment Method: <span>Credit Card</span></li>
                                    <li>Mastercard : <span>**** **** **** 1234</span></li>
                                    <li>Exp. : <span>01/30</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="settingBox">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-2">
                                    <h5>Notifications </h5>
                                </div>
                                <ul className="settingDetails notificationsList">
                                    <li>New Event <div className="switch">
                                        <label>
                                            <input type="checkbox" /><span className="lever"></span>
                                        </label></div></li>
                                    <li>New Purchase <div className="switch">
                                        <label>
                                            <input type="checkbox" /><span className="lever"></span>
                                        </label></div></li>
                                    <li>New Sale <div className="switch">
                                        <label>
                                            <input type="checkbox" /><span className="lever"></span>
                                        </label></div></li>
                                    <li>Trending News Headline <div className="switch">
                                        <label>
                                            <input type="checkbox" /><span className="lever"></span>
                                        </label></div></li>
                                    <li>Total Credit Points <div className="switch">
                                        <label>
                                            <input type="checkbox" /><span className="lever"></span>
                                        </label></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="settingBox">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-2">
                                    <h5>Preferences </h5>
                                    <Link to=""><img src="./app-assets/img/pen.svg" className="editIcon" alt="" /> Edit</Link>
                                </div>
                                <ul className="settingDetails preferList">
                                    <li>Notifications
                                    <div className="preferCheckbox">
                                            <p>
                                                <input className="with-gap" name="notifications" type="radio" id="notifications1" />
                                                <label htmlFor="notifications1">Send individually by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="notifications" type="radio" id="notifications2" />
                                                <label htmlFor="notifications2">Send daily by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="notifications" type="radio" id="notifications3" />
                                                <label htmlFor="notifications3">Send weekly by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="notifications" type="radio" id="notifications4" />
                                                <label htmlFor="notifications4">Don't send notifications by email</label>
                                            </p>
                                        </div>
                                    </li>
                                    <li>Messages
                                        <div className="preferCheckbox">
                                            <p>
                                                <input className="with-gap" name="messages" type="radio" id="messages1" />
                                                <label htmlFor="messages1">Send individually by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="messages" type="radio" id="messages2" />
                                                <label htmlFor="messages2">Send daily by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="messages" type="radio" id="messages3" />
                                                <label htmlFor="messages3">Send weekly by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="messages" type="radio" id="messages4" />
                                                <label htmlFor="messages4">Don't send notifications by email</label>
                                            </p>
                                        </div>
                                    </li>
                                    <li>New Cards Update
                                            <div className="preferCheckbox">
                                            <p>
                                                <input className="with-gap" name="cardupdate" type="radio" id="cardupdate1" />
                                                <label htmlFor="cardupdate1">Send individually by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="cardupdate" type="radio" id="cardupdate2" />
                                                <label htmlFor="cardupdate2">Send daily by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="cardupdate" type="radio" id="cardupdate3" />
                                                <label htmlFor="cardupdate3">Send weekly by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="cardupdate" type="radio" id="cardupdate4" />
                                                <label htmlFor="cardupdate4">Don't send notifications by email</label>
                                            </p>
                                        </div>
                                    </li>
                                    <li>New Set Update
                                            <div className="preferCheckbox">
                                            <p>
                                                <input className="with-gap" name="setupdate" type="radio" id="setupdate1" />
                                                <label htmlFor="setupdate1">Send individually by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="setupdate" type="radio" id="setupdate2" />
                                                <label htmlFor="setupdate2">Send daily by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="setupdate" type="radio" id="setupdate3" />
                                                <label htmlFor="setupdate3">Send weekly by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="setupdate" type="radio" id="setupdate4" />
                                                <label htmlFor="setupdate4">Don't send notifications by email</label>
                                            </p>
                                        </div>
                                    </li>
                                    <li>New Box Update
                                            <div className="preferCheckbox">
                                            <p>
                                                <input className="with-gap" name="boxupdate" type="radio" id="boxupdate1" />
                                                <label htmlFor="boxupdate1">Send individually by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="boxupdate" type="radio" id="boxupdate2" />
                                                <label htmlFor="boxupdate2">Send daily by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="boxupdate" type="radio" id="boxupdate3" />
                                                <label htmlFor="boxupdate3">Send weekly by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="boxupdate" type="radio" id="boxupdate4" />
                                                <label htmlFor="boxupdate4">Don't send notifications by email</label>
                                            </p>
                                        </div>
                                    </li>
                                    <li>On receiving a Rate/Review
                                            <div className="preferCheckbox">
                                            <p>
                                                <input className="with-gap" name="ratereview" type="radio" id="ratereview1" />
                                                <label htmlFor="ratereview1">Send individually by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="ratereview" type="radio" id="ratereview2" />
                                                <label htmlFor="ratereview2">Send daily by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="ratereview" type="radio" id="ratereview3" />
                                                <label htmlFor="ratereview3">Send weekly by email</label>
                                            </p>
                                            <p>
                                                <input className="with-gap" name="ratereview" type="radio" id="ratereview4" />
                                                <label htmlFor="ratereview4">Don't send notifications by email</label>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="settingBox">
                            <div className="container">
                                <div className="cardBoxHeader p-0 mb-2">
                                    <h5>Store Update </h5>
                                    <Link to=""><img src="./app-assets/img/pen.svg" className="editIcon" alt="" /> Edit</Link>
                                </div>
                                <ul className="settingDetails notificationsList">
                                    <li>Notify me if a new card is added  <div className="switch"><label><input type="checkbox" /><span className="lever"></span></label></div></li>
                                    <li>Notify me if a new box is added  <div className="switch"><label><input type="checkbox" /><span className="lever"></span></label></div></li>
                                    <li>Notify me if a new set is added  <div className="switch"><label><input type="checkbox" /><span className="lever"></span></label></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
