import React from 'react'
import data from '../Components/Assets/data'
import Item from '../Item/Item'
import './Popular.css'
function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="items">
            {
                data.map((items,i)=>{
                    return(
                    <Item key={i} id={items.id} name={items.name} img={items.image} new_price={items.new_price} old_price={items.old_price} />
                )})
            }
        </div>
    </div>
  )
}

export default Popular