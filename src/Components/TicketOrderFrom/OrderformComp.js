import React from 'react'
import DetailHeaderComp from '../Eventdetail/DetailHeaderComp'
import PackageTabComp from '../PackageTab/PackageTabComp.js'

import "./Orderform.css"

export default function OrderformComp() {
  return (
    <div>
        <div>
          <DetailHeaderComp/>
  <div className="container">
    
  </div>
  {/* single product details */}
  <div className="small-container single-product">
    <div className="row">
      <div className="col-2">
        <img src="https://i.ibb.co/1MydDzN/gallery-1.jpg" alt width="100%" id="ProductImg" />
        
      </div>
      <div className="col-2">
        <p>Home / T-Shirt</p>
        <h1>Red Printed T-Shirt by HRX</h1>
        <h4>₹500</h4>
        <select>
          <option>Select Size</option>
          <option>XXL</option>
          <option>XL</option>
          <option>L</option>
          <option>M</option>
          <option>S</option>
        </select>
        <input type="number" defaultValue={1} min="1" max="999"/>
        <a href className="btnform">Add To Cart</a>
       
      </div>
      <h3>Package Details <i className="fas fa-indent" /></h3>
        <br />
        <br></br><br></br><br></br><br></br>
        <PackageTabComp/>
    </div>
  </div>
  
</div>

    </div>
  )
}
