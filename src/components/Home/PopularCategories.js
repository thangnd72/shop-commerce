import React from 'react';
import { Link } from 'react-router-dom'
import '../Home/css/Home.css'
import USB from '../../images/usb.svg'
import Fashion from '../../images/fashion.svg'
import Dress from '../../images/dress.svg'
import Indian from '../../images/indian.svg'
const PopularCategories = () => {
    return (
        <>
            <div className="popular-categories">
                <div className="container-fluid">
                    <div className="inner-popular-categories">
                        <div className="title-popular">
                            <h2>Explore</h2>
                            <h2>regular categories</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={Indian} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={Dress} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={Fashion} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={USB} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={Indian} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={Indian} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={Indian} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="box-category">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to="">
                                                <img src={Indian} alt="indian"></img>
                                                <div className="title-category d-flex">
                                                    <p className="card-text">Take it with you</p>
                                                    <span className="card-text">01</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PopularCategories