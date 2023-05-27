import React from 'react'
import "../Cardgrid/CardComp.css";

export default function CardComp() {
  return (
    <div>
        <div class="CardComp">
 <div class="image"> </div>
  <div class="content">
    <a href="www.google.com">
      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </a>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium 
    </p>

    <a href="www.google.com" class="action">
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>
    </div>
  )
}
