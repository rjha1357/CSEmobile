import React, { Component } from 'react';
import Header from '../Includes/Header';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import AuthService from '../Auth/Auth.service';

export default class Membership extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getAccountType: [],
        }
    }

    componentDidMount() {
        Axios.get(API_BASE_URL + "api/get-account-type")
            .then(({ data }) => {
                // console.log(data);
                this.setState({
                    getAccountType: data.getRegisterAccountType
                });
            }).catch(err => console.log(err));
    }

    render() {
        const mystyle = {
            border: '1px solid black', 
            borderRadius:10,
            padding:'15px',
            margin:'10px'
          };

        const rightPath = './app-assets/img/checkgreen.svg';
        const cancelPath = './app-assets/img/closered.svg';
        return (
            <React.Fragment>
                <Header pagename="Membership Plan" history={this.props.history} />
                <main className="wrapper">
                    <div className="secInner">
                        <div className="container">
                            <h3 style={{"font-weight": "bolder"}}>Membership Plan</h3>
                            {this.state.getAccountType.map(function (acc_type) {
                            return <div key={acc_type.id} style={mystyle}>
                            <h4>{acc_type.account_type_name}</h4>
                            <p>Brief price description</p>
                            <h1><strong>{acc_type.price}</strong> <sup>$</sup></h1>
                            <Link to={{ pathname: "/register", state: { selAccType: acc_type.id}  // your data array of objects
                                }} style={{marginTop:"10px"}} className="btn black w-100">Enroll Now</Link>
                            </div> 
                            })}
                        </div>
                        <div className="container">
                        <h3 style={{"font-weight": "bolder"}}>Plan Comparison</h3>
                        <table className="memberPlan" id="PlanCompare" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Individual ($10/month)</th>
                                <th>Store ($20/month)</th>
                            </tr>
                        </thead>        
                            <tbody>
                                <tr>
                                    <th>Unlimited Listings</th>
                                    <td><img src={rightPath} alt="" /></td>
                                    <td><img src={cancelPath} /></td>
                                </tr>
                                <tr>
                                    <th>Featured on Home Page</th>
                                    <td><img src={rightPath} /></td>
                                    <td><img src={cancelPath} /></td>
                                </tr>
                                <tr>
                                    <th>Additional Profile Customization</th>
                                    <td><img src={rightPath} /></td>
                                    <td><img src={cancelPath} /></td>
                                </tr>
                                <tr>
                                    <th>Featured on Emails to Entire CSE User Base</th>
                                    <td><img src={rightPath} /></td>
                                    <td><img src={cancelPath} /></td>
                                </tr>
                                <tr>
                                    <th>Customer Reward Codes and Reward Credits</th>
                                    <td><img src={rightPath} /></td>
                                    <td><img src={rightPath} /></td>
                                </tr>
                                <tr>
                                    <th>Featured on Card Shop Tab</th>
                                    <td><img src={rightPath} /></td>
                                    <td><img src={rightPath} /></td>
                                </tr>
                                <tr>
                                    <th>Ability to Upload Videos on Profile Page</th>
                                    <td><img src={rightPath} /></td>
                                    <td><img src={rightPath} /></td>
                                </tr>
                                <tr>
                                    <th>Featured on the CSE Blog Monthly</th>
                                    <td><img src={rightPath} /></td>
                                    <td><img src={rightPath} /></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
