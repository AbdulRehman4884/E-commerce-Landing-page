import React from 'react'
import new_collection from '../Components/Assets/new_collections'
import Item from '../Item/Item'
import './NewCollection.css'
function NewCollections() {
  return (
    <div className='nawcollection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {
                    new_collection.map((items,i)=>{
                        return(
                            <Item key={i} id={items.id} name={items.name} img={items.image} new_price={items.new_price} old_price={items.old_price} />
                        )
                    })
                }
            </div>
    </div>
  )
}

export default NewCollections