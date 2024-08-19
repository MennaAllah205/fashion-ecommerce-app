import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>

      <img className='shop-category-banner' src={props.banner} alt='Banner' />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
          </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt='Sort Dropdown' />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;