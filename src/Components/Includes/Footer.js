import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    componentDidMount() {
        window.footerFloatingBtn();
    }
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <ul className="footTabs">
                        <li className="active"><Link to="/"><img src="./app-assets/img/home.svg" alt="" /><img src="./app-assets/img/home_active.svg" alt="" /></Link></li>
                        <li className=""><Link to="/search"><img src="./app-assets/img/search.svg" alt="" /><img src="./app-assets/img/search_active.svg" alt="" /></Link></li>
                        <li className="footTabsCenter"><Link to="#" className="floating-btn"
                        // onClick="document.getElementById('circularMenu').classNameList.toggle('active');"
                        >
                            <img src="./app-assets/img/plus_line_white.svg" alt="" />
                        </Link>
                        </li>
                        <li className=""><Link to="/marketplace"><img src="./app-assets/img/marketo.svg" alt="" /><img src="./app-assets/img/marketo_active.svg" alt="" /></Link></li>
                        <li className=""><Link to="/dashboard"><img src="./app-assets/img/user.svg" alt="" /><img src="./app-assets/img/user_active.svg" alt="" /></Link></li>
                    </ul>
                </footer>
                <div id="circularMenu" className="circular-menu">
                    <div className="circularMenuList">
                        <menu className="items-wrapper">
                            <Link to="/add-set" className="menu-item"><img src="./app-assets/img/plus_border_black.svg" alt="" /><span>Add A Set</span></Link>
                            <Link to="/add-card" className="menu-item"><img src="./app-assets/img/plus_border_black.svg" alt="" /><span>Add A Card</span></Link>
                            <Link to="/add-box" className="menu-item"><img src="./app-assets/img/plus_border_black.svg" alt="" /><span>Add A Box</span></Link>
                        </menu>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}