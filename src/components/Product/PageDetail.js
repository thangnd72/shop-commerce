import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import './css/ProductList.css'
import New1 from '../../images/new-pro1.png'
import New2 from '../../images/new-pro2.png'
import New3 from '../../images/new-pro3.png'
import New4 from '../../images/new-pro4.png'

const PageDetail = () => {
    return (
        <div className="main-content">
            <Header />
            <div className="wrapper-content">
                <h2 className="text-center mt-5 mb-5">PRODUCT LIST</h2>
                <div className="container-fluid">
                    <div className="col-12 p-0">
                        <div className="sort-bar d-flex flex-row">
                            <span className="ml-5">Sort by: </span>
                            <div className="select-sort-price">
                                <div className="dropdown-toggle" data-toggle="dropdown">
                                    <span>Price</span>
                                </div>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">Low to High</Link>
                                    <Link className="dropdown-item" to="#">High to Low</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New1} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New2} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New3} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New4} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New1} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New2} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New2} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="inventory">
                                    <span className="sold-out">SOLD OUT</span>
                                </div>
                                <img className="w-100 h-100" src={New2} alt="card2"></img>
                                <div className="card-body fz-12 text-center pl-0 pr-0">
                                    <Link><p className="card-text">Some make up the bulk of the card's content.</p></Link>
                                    <div className="price-product mt-2">
                                        <span>$79.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagi fz-12 mt-5">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <Link class="page-link" href="#" tabindex="-1">Previous</Link>
                            </li>
                            <li class="page-item"><Link class="page-link" href="#">1</Link></li>
                            <li class="page-item"><Link class="page-link" href="#">2</Link></li>
                            <li class="page-item"><Link class="page-link" href="#">3</Link></li>
                            <li class="page-item">
                                <Link class="page-link" href="#">Next</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PageDetail