import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import AuthService from '../Auth/Auth.service';

import Stripe from './stripe';
import Paypal from './paypal';

export default class MembershipPayment extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            paymentMethod: 'stripe',
            id:'',
            accountType: '',
            membership: '',
            payAmount: ''
            
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const u_id = atob(this.props.match.params.user_id);
        this.setState({ id: u_id });

        Axios.post(API_BASE_URL + "api/get-user/" + atob(this.props.match.params.user_id))
            .then(({ data }) => {
                if (data.status === "success") {
                    this.setState({ accountType: data.userDetails.account_type });
                    this.setState({ membership: data.userDetails.membership });

                    if(data.userDetails.account_type == '2'){
                        this.setState({ payAmount: '10' });
                    }else if(data.userDetails.account_type == '3'){
                        this.setState({ payAmount: '20' });
                    }else{
                        this.setState({ payAmount: '' });
                    }
                }else if(data.status === "error"){
                    console.log(data.message);
                }
            }).catch(err => console.log(err));


    }


    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    };


    render() {
        return (
            <React.Fragment>
                <Header pagename="Membership Plan" history={this.props.history} />
                
                <main className="wrapper">
                <div className="container">
                        <p style={{"font-weight": "bolder"}}>SELECT PAYMENT METHOD *</p>
                        </div>
                <div className="secInner">
                <div className="container">
                <div className='paymentRadioBtn'>
                Stripe
                    <input 
                    id="stripe"
                        value="stripe"
                        name="paymentMethod"
                        type="radio"
                        onChange={this.handleChange}
                        checked={this.state.paymentMethod === 'stripe'}
                    />
                    Paypal
                    <input
                    id="paypal"
                        value="paypal"
                        name="paymentMethod"
                        type="radio"
                        onChange={this.handleChange}
                        checked={this.state.paymentMethod === 'paypal'}
                    />
                </div>
                </div>
                {
                    (this.state.paymentMethod == 'stripe') ? (
                        <div id='stripe-div'>
                            <Stripe id={this.state.id} accountType={this.state.accountType} payAmount={this.state.payAmount} membership={this.state.membership} />
                        </div>) : (
                        null
                    )}

                {
                    (this.state.paymentMethod == 'paypal') ? (
                        <div id='paypal-div'>
                            <Paypal id={this.state.id} accountType={this.state.accountType} membership={this.state.membership} />
                        </div>) : (
                        null
                    )}
                    </div>
                </main>
                

            </React.Fragment>
        )
    }
}