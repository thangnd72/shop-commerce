import React from 'react';
// import { Link } from 'react-router-dom'
// import New1 from '../../images/new-pro1.png'
// import New2 from '../../images/new-pro2.png'
// import New3 from '../../images/new-pro3.png'
// import New4 from '../../images/new-pro4.png'
import { connect } from 'react-redux'
import NewProduct from './NewProduct'
// import New5 from '../../images/new-pro5.png'


const NewArrival = (props) => {
     let { products } = props; // ddaay laf prop duoi ham mapStateToProp
    const showNewArrival = (products) => {
        let result = null
        if( products.length > 0) {
            result = products.map((product) => {
                return <NewProduct key={product.id} product={product} />
            })
        }
        return result
    }
    return (
        <div className="new-arrival-product">
            <div className="container-fluid">
                <div className="text-title text-center mt-5 mb-5">
                    <span>New Arrival</span>
                </div>
                <div className="row">
                  { showNewArrival(products) }
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        products : state.productReducer
    }
}
export default connect(mapStateToProps, null)(NewArrival)