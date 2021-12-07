import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PassedMsg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message:''
        }
    }
   
    render() {
        const {message,  isDisplayLogin} = this.props.location.state;
        
        var loginButton;
        if (isDisplayLogin) {
            loginButton = <Link className="btn white" to="/login">Click here to login</Link>;
          }
        return (
            <React.Fragment>
                <main className="wrapper m-0 p-0">
                    <div className="sec secThank">
                        <div className="container">
                            <img src="./app-assets/img/tick.svg" alt="" />
                            <p className="my-4">{message}</p>
                            <div>
                                {loginButton}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
