
import DetailHeaderComp from '../Eventdetail/DetailHeaderComp'
import PackageTabComp from '../PackageTab/PackageTabComp.js'
import "../Eventdetail/Detail.css"
import DetailboxComp from '../Detailbox/DetailboxComp'
import "../Eventdetail/bookbutton.css"

import "./Orderform.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavComp from '../Nav/NavComp';

export default function OrderformComp() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    const fetchEventDetails = async () => {
      const response = await axios.get(`http://localhost:8000/api/events/${id}`);
      setEventData(response.data);
    };

    fetchEventDetails();
  }, [id]);

  return (
    <div>
      <NavComp/>
      <div>
        <div>
          <header>
            <div className="header-banner" style={{ backgroundImage: `url(${eventData.eventIMAGE})` }}>
              <h1 className="detailhead">{eventData.eventNAME}</h1>
            </div>
          </header>
        </div>
        <div className="container" style={{marginTop:'21em'}}>
          {/* single product details */}
          <div className="small-container single-product">
            <div className="row">
              <div className="col-2">
                <img src={eventData.eventIMAGE} alt={eventData.eventNAME} width="100%" id="ProductImg" />
              </div>
              <div className="col-2">
                <div className="orderbreadcrumb" style={{fontFamily:"cursive" , color: "gray"}}>Home / {eventData.eventNAME}</div>
                <div className="orderformheading" style={{fontFamily:"cursive" , color: "white"}}>{eventData.eventNAME}</div>
                <div className="priceform" style={{fontFamily:"cursive" , color: "white"}}>Rs. 1500.00</div>
                <select>
                  <option>Select Ticket Package</option>
                  {eventData.ticket_packages && eventData.ticket_packages.map((ticket_packages) => (
                    <option key={ticket_packages.packageID}>{ticket_packages.package_name} - Rs. {ticket_packages.package_price}</option>
                  ))}
                </select>
                <input type="number" defaultValue={1} min="1" max="999"/>
                <button className="btnform">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
