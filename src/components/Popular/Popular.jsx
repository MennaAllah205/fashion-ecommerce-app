import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';

// Define a ProductItem component to render each item
const ProductItem = ({ id, name, image, new_price, old_price }) => (
  <div className="product-item" key={id}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>New Price: ${new_price}</p>
    <p>Old Price: ${old_price}</p>
  </div>
);

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-items">
            {data_product.map((item,i) => (
                <ProductItem 
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>
    </div>
  );
};

export default Popular;
