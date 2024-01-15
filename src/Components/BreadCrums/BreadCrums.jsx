import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../Assets/arrow.png';


const BreadCrums = (props) => {
    const {product}= props;
    return (
    <div className="breadcrum">
        Home   /  Shop   / {product.category}   / {product.name}
       
    </div>
  )
}

export default BreadCrums
