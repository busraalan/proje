import React, { useEffect, useState } from 'react'
import Stores from './Stores'




function Home() {
    const [last10Products, setLast10Products]= useState([])
    useEffect(() =>{
        fetch('https://acikyesil.bursa.bel.tr/api/3/action/datastore_search?limit=5')
          
       .then(res => res.json())
       .then(res=>setLast10Products(res))
      
    })
        
   return (
    <>

      
      <h2>Satış Noktaları</h2>
      <ul>
        {last10Products.map(product =><Stores key={product._id} item={product} />)}
      </ul>
      

    </>
  )
}

export default Home
