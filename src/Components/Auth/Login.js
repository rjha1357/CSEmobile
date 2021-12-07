import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import AuthService from './Auth.service';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();

        this.state = {
            txtUsername: '',
            txtPassword: '',
            remember: false,
            hiddenPassword: true,
        }
    }

    componentDidMount() {
        if(AuthService.getCurrentUser()){
            this.props.history.push("dashboard");
        };
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const value = event.target.name === 'remember' ? event.target.checked : event.target.value;
        //console.log(value);
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validator.allValid()) {
            const formData = new FormData(event.target);
            AuthService.login(formData)
                .then((data) => {
                    if (data.status === 'success') {
                        this.props.history.push("dashboard");
                    }
                });
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    toggleShow = () => {
        this.setState({ hiddenPassword: !this.state.hiddenPassword });
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
                            <form className="secForm" onSubmit={this.handleSubmit}>
                                <h4 className="mb-5">Login</h4>
                                <div className="input-field customField">
                                    <label className="active">Username <span className="required red-text">*</span></label>
                                    <input type="text" className="validate" name="txtUsername" onChange={this.handleInputChange} value={this.state.txtUsername} />
                                    <div style={errorMsg}>{this.validator.message('Username', this.state.txtUsername, 'required|min:5|max:20')}</div>
                                </div>
                                <div className="input-field customField">
                                    <label className="active">Password <span className="required red-text">*</span></label>
                                    <input className="validate passwordText" type={this.state.hiddenPassword ? 'password' : 'text'} name='txtPassword' id='password-field' autoComplete='new-password' value={this.state.txtPassword} onChange={this.handleInputChange} />
                                    <div style={errorMsg}>{this.validator.message('Password', this.state.txtPassword, 'required|min:6|max:20')}</div>
                                    <i toggle="#password-field" className="material-icons toggle-password" onClick={this.toggleShow}>{this.state.hiddenPassword ? ("visibility_off") : ("visibility")}</i>
                                </div>
                                <div className="forgotText mb-0">
                                    <p className="m-0">
                                        <input type="checkbox" id="remember" name="remember" checked={this.state.remember} value={!this.state.remember} onChange={this.handleInputChange} />
                                        <label htmlFor="remember">Remember Me</label>
                                    </p>
                                    <Link to="/forgot-password" className="black-text">Forgot password?</Link>
                                </div>
                                <p className="termsText my-3">By Continuing, you agree to CSE's <Link to="/terms" className="underline">Terms and Condition</Link> and <Link to="/privacy-policy" className="underline">Privacy Policy</Link></p>
                                <div className="center-align mt-4">
                                    <input type="submit" value="Sign In" className="btn black w-100" />
                                </div>
                                <div className="newAccount text-center">
                                    <h5 className="m-0 mb-4"><span>New to CSE?</span></h5>
                                    <Link to="/membership-plan" className="btn black w-100">Create your CSE account</Link>
                                    <Link to="/" style={{marginTop:"10px"}} className="btn black w-100">Go To Home Page</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}