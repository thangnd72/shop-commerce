import React from 'react';
import errorImg from '../images/not-found.jpg'

const NotFound = () => {
    return(
        <div className="error-page">
            <h4 className="text-center text-uppercase text-secondary mb-0 mt-5">Sorry! Not found this page!</h4>\
            <img  className="w-50 h-50 m-auto d-block ml-auto mr-auto" src={errorImg} alt="error-page" />
        </div>
    )
}
export default NotFound