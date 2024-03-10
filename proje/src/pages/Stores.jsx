import React from 'react'

function Stores({item}) {
  return (
    
    <div className="card">
  
  <div className="card-body">
    <h5 className="card-title">{item._id}</h5>
    <p className="card-text">{item.gml_id}</p>
    
  </div>
</div>
      
  
  )
}

export default Stores
