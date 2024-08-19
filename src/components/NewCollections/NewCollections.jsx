import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections'; // Make sure this path is correct and the file exists
import Item from '../item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item) => (
          <Item
            key={item.id} // Ensure item.id is unique
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

export default NewCollections;
