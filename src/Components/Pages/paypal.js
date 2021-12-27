import React, { Component } from 'react';
import Axios from 'axios';
export default class Paypal extends Component {
    constructor(props) {
        super(props);
        // this.validator = new SimpleReactValidator();
        this.state = {
            accountType: '',
            payAmount:''
            
        }
    }

    componentDidMount() {
        this.setState({ accountType: this.props.accountType });
        if(this.props.accountType == '2'){
            this.setState({ payAmount: '10' });
        }else if(this.props.accountType == '3'){
            this.setState({ payAmount: '20' });
        }
    }

    render(){
        const amt ={
            color: 'green',
        }
        return(
            <React.Fragment>
                <h1>{this.state.payType}</h1>
                <div className="container">
                            <form className="secForm" onSubmit={this.handlePaypalSubmit}>
                            <input type="hidden" name="payAmount" onChange={this.handleInputChange} value={this.state.payAmount} />
                            <input type="hidden" name="accType" onChange={this.handleInputChange} value={this.props.accountType} />   
                            <div className="input-field customField">
                                    <h5><strong>Total Amount:<span style={amt}>${this.state.payAmount}</span></strong></h5>
                                </div>
                            </form>
                        </div>
                </React.Fragment>
        )
    }
}