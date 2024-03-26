import React from 'react'
import './Catagery.css'
import { LiaRupeeSignSolid } from "react-icons/lia";

const Catagery = () => {
  return (
    <div>
     
<div class="category">
<div className='womenHeader'><h1>New Lunch * MAHARANI</h1></div>
  <div class="product">
    <img src='https://www.needledust.com/cdn/shop/files/Isla_A_400x.jpg?v=1707282544'alt="Product 1"/>
   <div  ><h4 className='pname'>POPPY (HEEL)</h4></div>
    <div class="price"><h4><LiaRupeeSignSolid />50,000</h4></div>
  </div>
  <div class="product">
    <img src="https://www.needledust.com/cdn/shop/files/Adele_E_400x.jpg?v=1707484181" alt="Product 2"/>
    <div><h4 className='pname'>LANA (HEEL)</h4></div>
    <div class="price"><h4 ><LiaRupeeSignSolid />6,765</h4></div>
  </div>
  <div class="product">
    <img src="https://www.needledust.com/cdn/shop/files/Zaina_C_400x.jpg?v=1707484009" alt="Product 3"/>
    <div><h4 className='pname'>FIONA (HEEL)</h4></div>
    <div class="price"><h4 ><LiaRupeeSignSolid />7,863</h4></div>
  </div>
  <div class="product">
    <img src="https://www.needledust.com/cdn/shop/files/Poppy_G_400x.jpg?v=1707484074" alt="Product 4"/>
   <div><h4 className='pname'>ADELE (HEEL)</h4></div>   
    <div class="price"><h4 ><LiaRupeeSignSolid />8,765</h4></div>
  </div>
</div>



    </div>
  )
}

export default Catagery
