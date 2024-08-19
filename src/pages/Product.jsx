import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Breadcrum from '../components/Breadcrum/Breadcrum'; 
import ProductDisplay from '../components/ProductDispaly/ProductDispaly';
import DiscreptionBox from '../components/DiscreptionBox/DiscreptionBox';
import RelatedItems from '../components/RelatedItems/RelatedItems';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams(); // Use useParams as a function
    const product = all_product.find(e => e.id === Number(productId));

    return (
        <div>
         
            {product && <Breadcrum product={product} />}
            <ProductDisplay product={product} />
            <DiscreptionBox/>
            <RelatedItems/>
            

          
        </div>
    );
};

export default Product;
