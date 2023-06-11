import React from 'react'
import './Detailbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faLocationDot, faUser, faTag } from '@fortawesome/free-solid-svg-icons'

export default function DetailboxComp() {
  return (
    <div>
        <div>
  <ul className="service-flex-container">
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faCalendarDays} size="2xl"/><br /><span class="textp">Audio &amp; Heimkino</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faClock} size="2xl"/><br /><span class="textp">Audio &amp; Heimkino</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faLocationDot}size="2xl" /><br /><span class="textp">Audio &amp; Heimkino</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faUser} size="2xl"/><br /><span class="textp">Audio &amp; Heimkino</span></p><p>
      </p></li>
    <li className="service-flex-item">
      <p className="small"><FontAwesomeIcon icon={faTag}size="2xl" /><br /><span class="textp">Audio &amp; Heimkino</span></p><p>
      </p></li>
  </ul>
  
</div>


    </div>
  )
}
