import React from 'react'
import "../Nav/Nav.css"

export default function NavComp() {
  return (
    <div>
        {/* <!-- source https://cssdeck.com/labs/css-side-menu --> */}
<div class="menu-outer">
    <div class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <nav>
        <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Upcoming Events</a></li>
           <li><a href="#">About</a></li> 
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Checkout</a></li>
       </ul>
   </nav>
</div>
<a class="menu-close" onClick="return true">
    <div class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</a>
    </div>
  )
}
