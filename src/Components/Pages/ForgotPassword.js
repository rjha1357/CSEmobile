import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            txtEmail: '',
            errorMessage: ''
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validator.allValid()) {
            const formData = new FormData(event.target);
            Axios.post(API_BASE_URL + "api/reset-password", formData)
                .then(({ data }) => {
                    console.log(data);                    
                    if (data.status === "success") {
                        this.props.history.push({
                            pathname: '/info',
                            state: { message: "Reset password link sent successfully to email id, please check your mail." }
                        })
                    } else {
                        this.setState({ errorMessage: data.message });
                    }
                }).catch(err => console.log(err));

        } else {
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
                <main className="wrapper m-0 p-0">
                    <div className="sec secLogin">
                        <div className="container">
                            <Link to="#" className="btnGoBack" onClick={() => { this.props.history.goBack(); }}><img src="./app-assets/img/left-arrow-black.svg" alt="" /></Link>
                            <form className="secForm" onSubmit={this.handleSubmit}>
                                <h4 className="mb-5">Forgot Password</h4>
                                <div className="input-field customField">
                                    <label className="active">Email ID <span className="required red-text">*</span></label>
                                    <input type="email" className="validate" name="txtEmail" onChange={this.handleInputChange} value={this.state.txtEmail} />
                                    <div style={errorMsg}>{this.validator.message('Email', this.state.txtEmail, 'required|email')}</div>
                                    {this.state.errorMessage && <div style={errorMsg}>{this.state.errorMessage} </div>}
                                </div>                                
                                <div className="center-align mt-2">
                                    <input type="submit" className="btn black w-100" value="Reset Password" />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}