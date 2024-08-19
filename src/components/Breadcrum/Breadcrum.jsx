import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    return (
        <div className='breadcrum'>
            <span>HOME</span>
            <img src={arrow_icon} alt='Arrow Icon' />
            <span>SHOP</span>
            <img src={arrow_icon} alt='Arrow Icon' />
            <span>{product.category}</span>
            <img src={arrow_icon} alt='Arrow Icon' />
            <span>{product.name}</span>
        </div>
    );
};

export default Breadcrum;
