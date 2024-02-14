import React from 'react';
import './Item.css';

function Item(props) {
    return (
        <div className='item'>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
            <div className='item_price'>
                <div className='new_price'>{props.new_price}</div>
                <div className='old_price'>{props.old_price}</div>
            </div>
        </div>
    );
}

export default Item;
