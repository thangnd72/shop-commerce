import React from 'react';
import { Link } from 'react-router-dom'
import P1 from '../../images/p1.jpg'
import P2 from '../../images/p2.jpg'
import P3 from '../../images/p3.jpg'
import P4 from '../../images/p4.jpg'
import '../Home/css/Home.css'

const TopContent = (props) => {
    return (
        <div className="content-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="text-title d-block ml-auto mr-auto mt-5">
                        <span>Top Trending</span>
                    </div>
                    <div id="myCarousel" className="carousel slide w-100" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item py-5 active">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P1} alt="card1"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P2} alt="card2"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P3} alt="card2"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P4} alt="card2"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P1} alt="card3"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P2} alt="card4"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item py-5">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P4} alt="card5"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P3} alt="card6"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="card">
                                            <img className="w-100 h-100" src={P2} alt="card7"></img>
                                            <div className="card-body pl-0 pr-0">
                                                <p className="card-text">Some make up the bulk of the card's content.</p>
                                                <span>$79.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="next-prev">
                        <Link className="carousel-control-prev text-dark pl-5" to="#myCarousel" role="button" data-slide="prev">
                            <span className="fas fa-chevron-left" aria-hidden="true" />
                        </Link>
                        <Link className="carousel-control-next text-dark pr-5" to="#myCarousel" role="button" data-slide="next">
                            <span className="fas fa-chevron-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopContent