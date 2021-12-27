import React, { Component } from 'react';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import { toastrSuccess, toastrWarning } from '../../Services/ToasterService';

export default class ConfirmEmail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:'',
            user_id: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        Axios.post(API_BASE_URL + "api/resend-link", formData)
            .then(({ data }) => {
                console.log(data);
                if (data.status === "success") {
                    toastrSuccess(data.message);
                    localStorage.clear();
                } else {
                    alert("something went wrong");
                }
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <main className="wrapper m-0 p-0">
                    <div className="sec secThank">
                        <div className="container">
                            <img src="./app-assets/img/tick.svg" alt="" />
                            <p className="my-4">Congratulation! Your registration is completed. Please confirm your email account. If you have not received confirmation mail, then re-send Mail on click of the button bellow.</p>
                            <form className="secForm" onSubmit={this.handleSubmit}>
                                <div className="center-align mt-2">
                                    <input type="submit" className="btn white" value="Re-send Link" />
                                    <input type="hidden" name="username" value={localStorage.getItem('username')} />
                                    <input type="hidden" name="email" value={localStorage.getItem('email')} />
                                    <input type="hidden" name="user_id" value={localStorage.getItem('user_id')} />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
