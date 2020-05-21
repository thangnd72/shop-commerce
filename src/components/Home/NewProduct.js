import React from 'react';
import { Link } from 'react-router-dom'
// import New1 from '../../images/new-pro5.png'
const NewProduct = (props) => {
    let { product } = props
    return (
        <div className="col-md-3 col-sm-6 col-12">
            <div className="card">
                <div className="inventory">
                    <span className="sold-out">SOLD OUT</span>
                </div>
                {/* <div class="overlay">
                    <div class="number"><span>01</span></div>
                    <i class="far fa-play-circle fa-2x"></i>
                </div> */}
                <img className="w-100 h-100 product" src={product.image} alt={product.name}></img>
                <div className="card-body fz-12 text-center pl-0 pr-0">
                    <Link to=""><p className="card-text">{product.description}</p></Link>
                    <div className="price-product mt-2">
                        <span>${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewProduct
