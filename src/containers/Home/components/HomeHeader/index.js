import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link } from "react-router-dom";
import "./style.css";

class HomeHeader extends Component {
    render() {
        return (
            <div className="homeHeader">
                <header className="homeHeader__wrapper">
                    <a className="homeHeader__city">北京</a>
                    <Router>
                        <Link to="/search"
                        className="homeHeader__search">输入商户名。地点
                        </Link>
                        <Link to="/user" 
                        className="homeHeader__self">
                            <div className="homeHeader__protrait" />
                        </Link>
                    </Router>
                </header>
                
            </div>
        );
    }
}

export default HomeHeader;