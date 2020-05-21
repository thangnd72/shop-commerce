import React from 'react'
// import Header from '../Header'
// import Footer from '../Footer'
import { Link } from 'react-router-dom'
import New1 from '../../images/new-pro1.png'

const Product = () => {
    return (
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
    )
}
export default Product