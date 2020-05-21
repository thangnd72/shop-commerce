import React from 'react';
import { Link, NavLink } from "react-router-dom";
// import {NavLink} from "reactstrap";s
import Cart from '../images/cart.svg';
import User from '../images/user-icon.svg';
import Heart from '../images/heart.svg';
import Logo from '../images/logo.png'
import '../css/Header.css';

const Header = (props) => {
    return (
        <>
            <header id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <div className="top-nav top-nav-left">
                                <ul>
                                    <li><Link to="">Daily Deals</Link></li>
                                    <li><Link to="">Gift Cards</Link></li>
                                    <li><Link to="">Help &amp; Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="top-nav top-nav-right">
                                <ul>
                                    <li><Link to="">Currency</Link></li>
                                    <li><Link to="">USD</Link></li>
                                    <li><Link to="">Language</Link></li>
                                    <li><Link to="">English</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row bottom-header">
                        <div className="col-md-3 col-6">
                            <div className="logo">
                                <Link to="">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-search">
                                <button className="btn-dropdown" data-toggle="dropdown">
                                    <span>Shop By Category</span>
                                </button>
                                <div className="dropdown-menu ">
                                    <ul className="nav-menu">
                                        <li className="dropdown-item"><Link to="#">All Categories</Link></li>
                                        <li className="dropdown-item"><Link to="#">Men's</Link></li>
                                        <li className="dropdown-item"><Link to="#">Women's</Link></li>
                                        <li className="dropdown-item"><Link to="#">SHOES</Link></li>
                                        <li className="dropdown-item"><Link to="#">Shirt</Link></li>
                                        <li className="dropdown-item"><Link to="#">Trouser</Link></li>
                                        <li className="dropdown-item"><Link to="#">Wallet bag</Link></li>
                                        <li className="dropdown-item"><Link to="#">Couple</Link></li>
                                    </ul>
                                </div>
                                <div className="search-form">
                                    <input type="text" placeholder="Product Search" />
                                    <input type="button" id="search-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info-box">
                                <div className="account-box">
                                    <Link to="">
                                        <img src={User} alt="user"></img>
                                    </Link>
                                    <div className="inner-acc-box">
                                        <ul>
                                            <li><Link to="#"><i className="fas fa-unlock"></i>Login</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Link to="">
                                        <img src={Heart} alt="heart"></img>
                                        <span className="badge badge-dark">0</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <img src={Cart} alt="cart"></img>
                                        <span className="badge badge-danger">0</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-6">
                            <div className="nav-bar">
                                <ul>
                                    <li><NavLink activeClassName="activeHeader" exact to="/">HOME</NavLink></li>
                                    <li><NavLink to="#">Shop</NavLink></li>
                                    <li><NavLink to="#">Pages</NavLink></li>
                                    <li><NavLink activeClassName="activeHeader" to="/product">Product</NavLink></li>
                                    <li><NavLink to="#">Recommend</NavLink></li>
                                    <li><NavLink to="#">About</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );

}

export default Header
