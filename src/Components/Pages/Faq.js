import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';

export default class Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            faq_categories: [],
            faq_content: {},            
        }
    }

    componentDidMount() {
        
        Axios.get(API_BASE_URL + "api/faq-categories")
            .then(({ data }) => {
                //console.log(data);
                this.setState({
                    faq_categories: data
                });
            }).catch(err => console.log(err));

        Axios.get(API_BASE_URL + "api/faq-content")
            .then(({ data }) => {
                const faq_content = {};
                data.map(faq => {
                    const key = "faq_id_" + faq.faq_id;
                    if (!faq_content.hasOwnProperty(key)) {
                        faq_content[key] = [faq];
                    } else {
                        faq_content[key].push(faq);
                    }
                    return faq;
                });
                this.setState({
                    faq_content: faq_content
                },()=>window.switchTabs())

                console.log(faq_content);
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <Header pagename="FAQ's" history={this.props.history} />
                <main className="wrapper">
                    <div className="secInner">
                        <ul className="tabs headerTabs">
                            {this.state.faq_categories.map((faqCat,index) => {
                                return <li key={faqCat.id} className="tab"><Link className={index === 0 ? 'active' : ''} to={"#faq_id_" + faqCat.id}>{faqCat.name}</Link></li>;
                            })}

                        </ul>
                        <div className="tabSearchbar">
                            <div className="container">
                                <div className="input-field tabSearch">
                                    <input id="search" type="search" placeholder="Search your question" required />
                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </div>
                        </div>
                        <div className="secfaq mt-3">
                            <div className="container">
                                {
                                    Object.keys(this.state.faq_content).map((key,index) => {
                                       return <div id={key} className={index === 0 ? 'faqSection active' : 'faqSection' }>
                                            <ul className="collapsible faqCollapsible" data-collapsible="accordion">
                                            {this.state.faq_content[key].map(faq =>{
                                            return <li>
                                                    <div className="collapsible-header">{faq.title}<i className="material-icons mr-0 ml-2">expand_more</i></div>
                                                    <div className="collapsible-body"><p>{faq.discription}</p></div>
                                                </li>
                                            })
                                            }
                                            </ul>
                                        </div>
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
