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
        <img src="https://miro.medium.com/v2/resize:fit:1200/1*pkXFFWN5Wxuk3rlrXnGKOQ.png" alt width="100%" id="ProductImg" />
        
      </div>
      <div className="col-2">
        <div class="orderbreadcrumb"style={{fontFamily:"cursive" , color: "gray"}}>Home / Back to 70's</div>
        <div class="orderformheading"style={{fontFamily:"cursive" , color: "white"}}>Back to 70's with Dialog</div>
        <div class="priceform"style={{fontFamily:"cursive" , color: "white"}}>Rs. 1500.00</div>
        <select>
          <option>Select Ticket Package</option>
          <option>Gold Package</option>
          <option>Silver Package</option>
          <option>Bronze Package</option>
          
        </select>
        <input type="number" defaultValue={1} min="1" max="999"/>
        <a href className="btnform">Add To Cart</a>
       
      </div>
      <h3 style={{fontFamily:"cursive" , color: "white"}}>Package Details <i className="fas fa-indent" /></h3>
        <br />
        <br></br><br></br><br></br><br></br>
        <PackageTabComp/>
    </div>
  </div>
  
</div>

    </div>
  )
}
