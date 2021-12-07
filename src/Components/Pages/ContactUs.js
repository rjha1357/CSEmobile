import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import SimpleReactValidator from 'simple-react-validator';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import { toastrWarning } from '../../Services/ToasterService';

export default class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            f_name:'',
            l_name:'',
            email:'',
            message_text:''
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,     
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validator.allValid()) {
            const formData = new FormData(event.target);
            Axios.post(API_BASE_URL + "api/insert-contact-form", formData)
                    .then(({ data }) => {
                        console.log(data);
                        if (data.status === "success") {
                            this.props.history.push({
                                pathname: '/info',
                                state: { message: data.message }
                            })
                            window.location.href="/";
                        } else {
                            toastrWarning("something went wrong");
                        }
                    }).catch(err => console.log(err))
        }else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    render() {
        const errorMsg = {
            color: 'red',
        }
        return (
            <React.Fragment>
                <Header pagename="Contact Us" history={this.props.history} />
                <main className="wrapper">
                    <div className="sec secInner">
                        <div className="container">
                            <form className="secForm contactForm" onSubmit={this.handleSubmit}>
                                <div className="input-field customField">
                                    <label className="active">First Name<span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="f_name" onChange={this.handleInputChange} value={this.state.f_name} />
                                    <div style={errorMsg}>{this.validator.message('First Name', this.state.f_name, 'required|alpha')}</div>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Last Name<span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="l_name" onChange={this.handleInputChange} value={this.state.l_name} />
                                    <div style={errorMsg}>{this.validator.message('Last Name', this.state.l_name, 'required|alpha')}</div>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Your Email<span className="required red-text">*</span></label>
                                    <input type="email" className="validate" name="email"  onChange={this.handleInputChange} value={this.state.email} />
                                    <div style={errorMsg}>{this.validator.message('Email', this.state.email, 'required|email')}</div>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Your Message<span className="required red-text">*</span></label>
                                    <textarea onChange={this.handleInputChange} id="icon_prefix2" className="materialize-textarea" name="message_text" value={this.state.message_text}></textarea>
                                    <div style={errorMsg}>{this.validator.message('Message', this.state.message_text, 'required')}</div>
                                </div>
                                <div className="text-right mt-1">
                                    <input type="submit" value="Message" className="btn black w-100" />
                                </div>
                            </form>
                            <div className="contactInfo">
                                <ul>
                                    <li>San Francisco, 28 Eva Mountain Suite 942, Apt 5 San Francisco. 230909</li>
                                    <li>+2 (322) 411-543-1931<br /> +2 (728) 737-470-4523</li>
                                    <li>baha@getcraftwork.com<br />denis@getcraftwork.com</li>
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
