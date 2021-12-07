import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import { toastrSuccess, toastrWarning} from '../../Services/ToasterService';

export default class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            txtPassword1:'',
            txtPassword2:'',
            hiddenPassword: true,
            hiddenConfirmPassword: true,
            errorPasswordMessage:''
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            errorPasswordMessage:''
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();        
        if (this.validator.allValid()) {
            const { txtPassword1 } = this.state;
            const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
            const isOk = re.test(txtPassword1);
            if (!isOk) {
                this.setState({ errorPasswordMessage: "Password should contain at least 1 capital letter, small letters, 1 of these special characters !@#$%^&*_ and numbers and minimum 8 digits" });
            } else {
            const formData = new FormData(event.target);
            Axios.post(API_BASE_URL + "api/set-new-password", formData)
                .then(({ data }) => {
                    if (data.status === "success") {
                        toastrSuccess(data.message);
                        this.props.history.push("/login");
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
                            <Link to="#" className="btnGoBack" onClick={() => { this.props.history.goBack(); }} >
                                <img src="./app-assets/img/left-arrow-black.svg" alt="" />
                            </Link>
                            <form className="secForm" onSubmit={this.handleSubmit}>
                            <input type="hidden" name="txtUserid" value={atob(this.props.match.params.user_id)} />
                            <input type="hidden" name="otp" value={atob(this.props.match.params.otp)} />
                                <h4 className="mb-5">Reset Password</h4>
                                <div className="input-field customField">
                                    <label className="active">New Password <span className="required red-text">*</span></label>
                                    <input id="password-field" type={this.state.hiddenPassword ? 'password' : 'text'}  className="validate" name="txtPassword1" onChange={this.handleInputChange} value={this.state.txtPassword1} />
                                    <div style={errorMsg}>{this.validator.message('Password', this.state.txtPassword1, 'required')}</div>
                                    <i toggle="#password-field" className="material-icons toggle-password" onClick={this.toggleShow}>{this.state.hiddenPassword ? ("visibility_off") : ("visibility")}</i>
                                    {this.state.errorPasswordMessage && <div style={errorMsg}>{this.state.errorPasswordMessage} </div>}
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Repeat Password <span className="required red-text">*</span></label>
                                    <input id="password-repeat" type={this.state.hiddenConfirmPassword ? 'password' : 'text'} className="validate" name="txtPassword2" onChange={this.handleInputChange} value={this.state.txtPassword2} />
                                    <div style={errorMsg}>{this.validator.message('Confirm Password', this.state.txtPassword2, `required|in:${this.state.txtPassword1}`)}</div>                                    
                                    <i toggle="#password-repeat" className="material-icons toggle-password" onClick={this.toggleShowConfirm} >{this.state.hiddenConfirmPassword ? ("visibility_off") : ("visibility")}</i>
                                </div>
                                <div className="center-align mt-2">
                                    <input type="submit" className="btn black w-100" value="Reset Password"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }
}