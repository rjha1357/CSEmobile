import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import { toastrWarning } from '../../Services/ToasterService';
import AuthService from '../Auth/Auth.service';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            txtEmail: '',
            txtFullName: '',
            selAccType: '',
            txtUsername: '',
            txtPassword: '',
            confirmPassword: '',
            membership: '',
            txtReferralCode: '',
            isDisabled: true,
            chkAgree: '',
            getAccountType: [],
            hiddenPassword: true,
            hiddenConfirmPassword: true,
            errorUsernameMessage: '',
            errorEmailMessage: '',
            errorPasswordMessage:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelectAccChange = this.onSelectAccChange.bind(this);
    }

    componentDidMount() {
        Axios.get(API_BASE_URL + "api/get-account-type")
            .then(({ data }) => {
                //console.log(data);
                this.setState({
                    getAccountType: data.getRegisterAccountType
                });
            }).catch(err => console.log(err));

            if(AuthService.getCurrentUser()){
                this.props.history.push("dashboard");
            };

            const AccType = this.props.history.location.state.selAccType;
            this.setState({ selAccType: AccType });

            if(AccType != '' || AccType != null)
                {
                    if(AccType == '1' ){
                        console.log('Free');
                        // this.state.isDisabled = true;
                        this.setState({ membership: 'Free' });
                    }else if(AccType == '2'){
                        console.log('Premium');
                        this.setState({ membership: 'Premium' });
                    }else if(AccType == '3'){
                        console.log('Platinum');
                        this.setState({ membership: 'Platinum' });
                    }else{
                        this.setState({ membership: '' });
                    }
                }else{
                    this.setState({ membership: '' });
                }
    }

    onUsernameChange = (event) => {
        const username = event.target.value;
        Axios.post(API_BASE_URL + "api/check-username/" + username)
            .then(({ data }) => {
                if (data.status === "error") {
                    this.setState({ errorUsernameMessage: data.message });
                    return false;
                }
            }).catch(err => console.log(err));
    }

    onEmailChange = (event) => {
        const email = event.target.value;
        Axios.post(API_BASE_URL + "api/check-emailId/" + btoa(email))
            .then(({ data }) => {
                if (data.status === "error") {
                    this.setState({ errorEmailMessage: data.message });
                    return false;
                }
            }).catch(err => console.log(err));
    }

    onSelectAccChange = () =>{
        // event.preventDefault();
        const selAccType = this.state.selAccType;
        if(selAccType == '1' ){
            console.log('Free');
            // this.state.isDisabled = true;
            this.setState({ membership: 'Free' });
        }else if(selAccType == '2'){
            console.log('Premium');
            this.setState({ membership: 'Premium' });
        }else if(selAccType == '3'){
            console.log('Platinum');
            this.setState({ membership: 'Platinum' });
        }else{
            this.setState({ membership: '' });
        }

    }

    handleInputChange = (event) => {
        //console.log('value',event.target.value)
        //event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            errorUsernameMessage: '',
            errorEmailMessage: '',
            errorPasswordMessage:''
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validator.allValid()) {
            const { txtPassword } = this.state;
            const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
            const isOk = re.test(txtPassword);
            if (!isOk) {
                this.setState({ errorPasswordMessage: "Password should contain at least 1 capital letter, small letters, 1 of these special characters !@#$%^&*_ and numbers and minimum 8 digits" });
            } else {
                const formData = new FormData(event.target);
                Axios.post(API_BASE_URL + "api/insert-account", formData)
                    .then(({ data }) => {
                        console.log(data);
                        if (data.status === "success") {
                            //toastrSuccess(data.message);
                            this.props.history.push("confirm-email");
                            localStorage.setItem('username', data.username);
                            localStorage.setItem('email', data.email);
                            localStorage.setItem('user_id', data.user_id);
                        } else {
                            toastrWarning(data.message);
                        }
                    }).catch(err => console.log(err));
            }
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    toggleShow = () => {
        this.setState({ hiddenPassword: !this.state.hiddenPassword });
    };

    toggleShowConfirm = () => {
        this.setState({ hiddenConfirmPassword: !this.state.hiddenConfirmPassword });
    };

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
                                <h4>Create New Account</h4>
                                <p className="mb-5 mt-1">Already Registered? Please Click Here -
                                <Link to="/login" className="black-text underline">Login!</Link></p>
                                <div className="input-field customField">
                                    <label className="active">Your email <span className="required red-text">*</span></label>
                                    <input type="email" className="validate" name="txtEmail" onChange={this.handleInputChange} value={this.state.txtEmail} onBlur={this.onEmailChange} />
                                    <div style={errorMsg}>{this.validator.message('Email', this.state.txtEmail, 'required|email|min:4|max:30')}</div>
                                    {this.state.errorEmailMessage && <div style={errorMsg}>{this.state.errorEmailMessage} </div>}
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Full Name <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtFullName" onChange={this.handleInputChange} value={this.state.txtFullName} />
                                    <div style={errorMsg}>{this.validator.message('FullName', this.state.txtFullName, 'required|alpha_space|min:4|max:40')}</div>
                                </div>
                                <div className="customField">
                                    <div className="infoLableBox">
                                        <label className="active">Account Type <span className="required red-text">*</span></label>
                                        <Link to="#" className="infoTooltip tooltipped" data-position="top" data-delay="50" data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="material-icons">info</i></Link></div>
                                    <select name="selAccType" onChange={this.handleInputChange} value={this.state.selAccType} onBlur={this.onSelectAccChange} >
                                        <option >Select Account Type</option>
                                        {this.state.getAccountType.map(function (acc_type) {
                                            return <option key={acc_type.id} value={acc_type.id}>{acc_type.account_type_name}</option>;
                                        })}
                                    </select>
                                    <div style={errorMsg}>{this.validator.message('Account Type', this.state.selAccType, 'required|alpha_num_space')}</div>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Username <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtUsername" onChange={this.handleInputChange} value={this.state.txtUsername} onBlur={this.onUsernameChange} />
                                    <div style={errorMsg}>{this.validator.message('Username', this.state.txtUsername, 'required|alpha_num_space|min:4|max:30')}</div>
                                    {this.state.errorUsernameMessage && <div style={errorMsg}>{this.state.errorUsernameMessage} </div>}
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Membership Type</label>
                                    <input type="text" name="membership" value={this.state.membership} className="validate" disabled />
                                </div>
                                <div className="input-field customField">
                                    <div className="infoLableBox">
                                        <label className="active">Your Password <span className="required red-text">*</span>
                                        </label>
                                        <Link to="#" className="infoTooltip tooltipped" data-position="top" data-delay="50" data-tooltip="Password should contain at least 1 capital letter, small letters, 1 of these special characters !@#$%^&*_ and numbers."><i className="material-icons">info</i></Link>
                                    </div>
                                    <input className="validate passwordText" type={this.state.hiddenPassword ? 'password' : 'text'} name='txtPassword' id='password-field' autoComplete='new-password' value={this.state.txtPassword} onChange={this.handleInputChange} />
                                    <div style={errorMsg}>{this.validator.message('password', this.state.txtPassword, ['required'])}</div>
                                    <i toggle="#password-field" className="material-icons toggle-password" onClick={this.toggleShow}>{this.state.hiddenPassword ? ("visibility_off") : ("visibility")}</i>
                                    {this.state.errorPasswordMessage && <div style={errorMsg}>{this.state.errorPasswordMessage} </div>}
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Repeat Password <span className="required red-text">*</span></label>
                                    <input id="password-repeat" type={this.state.hiddenConfirmPassword ? 'password' : 'text'} className="validate passwordText" name="confirmPassword" onChange={this.handleInputChange} value={this.state.confirmPassword} />
                                    <div style={errorMsg}>{this.validator.message('Confirm Password', this.state.confirmPassword, `required|in:${this.state.txtPassword}`)}</div>
                                    <i toggle="#password-repeat" className="material-icons toggle-password" onClick={this.toggleShowConfirm} >{this.state.hiddenConfirmPassword ? ("visibility_off") : ("visibility")}</i>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Referral Code</label>
                                    <input type="text" name="txtReferralCode" id="txtReferralCode" value="Free" className="validate" onChange={this.handleInputChange} value={this.state.txtReferralCode} disabled={this.state.selAccType === '3' ? false : true} />
                                    <div style={errorMsg}>{this.validator.message('ReferralCode', this.state.txtReferralCode, 'max:6')}</div>
                                    {this.state.errorUsernameMessage && <div style={errorMsg}>{this.state.errorUsernameMessage} </div>}
                                </div>
                                <span className="mt-0">
                                    <input type="checkbox" id="agree" name="chkAgree" value="1" onChange={this.handleInputChange} />
                                    <label htmlFor="agree">I agree to the
                                    <Link to="/terms" className="underline"> Terms and Condition</Link></label>
                                    <div style={errorMsg}>{this.validator.message('Terms and condition', this.state.chkAgree, 'required')}</div>
                                </span>
                                <div className="center-align mt-4">
                                    <input type="submit" value="Register" className="btn black w-100" />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}