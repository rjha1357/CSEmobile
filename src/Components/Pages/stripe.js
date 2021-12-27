import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import AuthService from '../Auth/Auth.service';
import SimpleReactValidator from 'simple-react-validator';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default class Stripe extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            txtName: '',
            txtCardNumber: '',
            txtExpiryMonth: '',
            txtExpiryYear: '',
            txtCvv: '',
            chkAgree: '',
            accountType: '',
            payAmount:''
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleStripeSubmit = this.handleStripeSubmit.bind(this);
        // this.handlePaypalSubmit = this.handlePaypalSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ accountType: this.props.accountType });
        if(this.props.accountType == '2'){
            this.setState({ payAmount: '10' });
        }else if(this.props.accountType == '3'){
            this.setState({ payAmount: '20' });
        }
    }

    handleInputChange = (event) => {
        //console.log('value',event.target.value)
        //event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render(){
        const errorMsg = {
            color: 'red',
        }
        const amt ={
            color: 'green',
        }
        return(
            <React.Fragment>
                <main className="wrapper">
                    <div className="secInner">
                        
                        <div id="StripePayment" className="container">
                            <form className="secForm" onSubmit={this.handleStripeSubmit}>
                            <input type="hidden" name="userId" onChange={this.handleInputChange} value={this.props.id} />
                            <input type="hidden" name="payAmount" onChange={this.handleInputChange} value={this.props.payAmount} />
                            <input type="hidden" name="accountType" onChange={this.handleInputChange} value={this.props.accountType} />   
                                <div className="input-field customField">
                                    <label className="active">NAME ON CARD <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtName" onChange={this.handleInputChange} value={this.state.txtName} />
                                    <div style={errorMsg}>{this.validator.message('Name', this.state.txtName, 'required|min:4|max:30')}</div>
                                    
                                </div>
                                <div className="input-field customField">
                                    <label className="active">CARD NUMBER <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtCardNumber" onChange={this.handleInputChange} value={this.state.txtCardNumber} />
                                    <div style={errorMsg}>{this.validator.message('Card Number', this.state.txtCardNumber, 'required|min:4|max:30')}</div>
                                    
                                </div>
                                <div className="input-field customField">
                                    <label className="active">EXPIRY MONTH <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtExpiryMonth" onChange={this.handleInputChange} value={this.state.txtExpiryMonth} />
                                    <div style={errorMsg}>{this.validator.message('Month', this.state.txtExpiryMonth, 'required|min:4|max:4')}</div>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">EXPIRY YEAR <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtExpiryYear" onChange={this.handleInputChange} value={this.state.txtExpiryYear} />
                                    <div style={errorMsg}>{this.validator.message('Year', this.state.txtExpiryYear, 'required|min:4|max:4')}</div>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">CVV <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtCvv" onChange={this.handleInputChange} value={this.state.txtCvv} />
                                    <div style={errorMsg}>{this.validator.message('CVV', this.state.txtExpiryYear, 'required|min:4|max:4')}</div>
                                </div>
                                <span className="mt-0">
                                    <input type="checkbox" id="agree" name="chkAgree" value="1" onChange={this.handleInputChange} />
                                    <label htmlFor="agree">I agree to the
                                    <Link to="/terms" className="underline"> Terms and Condition</Link></label>
                                    <div style={errorMsg}>{this.validator.message('Terms and condition', this.state.chkAgree, 'required')}</div>
                                </span>
                                <div className="input-field customField">
                                    <h5><strong>Total Amount:<span style={amt}>${this.props.payAmount}</span></strong></h5>
                                </div>
                                <div className="center-align mt-4">
                                    <input type="submit" value="PAY NOW" className="btn black w-100" />
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </main>
            </React.Fragment>
        )
    }
}