import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useParams } from 'react-router-dom';
import DetailHeaderComp from '../Eventdetail/DetailHeaderComp'
import PackageTabComp from '../PackageTab/PackageTabComp.js'
import "../Eventdetail/Detail.css"
import DetailboxComp from '../Detailbox/DetailboxComp'
import "../Eventdetail/bookbutton.css"
import "./Orderform.css"
import NavComp from '../Nav/NavComp';
import swal from 'sweetalert';

export default function OrderformComp() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || []);

  useEffect(() => {
    const fetchEventDetails = async () => {
      const response = await axios.get(`http://localhost:8000/api/events/${id}`);
      setEventData(response.data);
    };

    fetchEventDetails();
  }, [id]);

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setSelectedQuantity(e.target.value);
  };

  const handleAddToCart = async () => {
    const packageId = Number(selectedPackage);  // Convert to number
    const selectedPackageDetails = eventData.ticket_packages.find(pkg => pkg.packageID === packageId);

    if (!selectedPackageDetails) {
      alert("Please select a package before adding to cart");
      return;
    }

    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;  // Get user id from token

    // Prepare data to be sent
    const data = {
      cart: user_id,  // Use user id as cart id
      event: id,
      ticket_package: packageId,
      quantity: selectedQuantity
    };

    // Post data to server
    try {
      await axios.post('http://localhost:8000/api/items/', data);
      swal("Success!", "Item added to cart successfully!", "success");
    } catch (error) {
      swal("Error!", "An error occurred while adding the item to the cart.", "error");
      console.error(error);
    }
  };

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
          <div className="small-container single-product">
            <div className="row">
              <div className="col-2">
                <img src={eventData.eventIMAGE} alt={eventData.eventNAME} width="100%" id="ProductImg" />
              </div>
              <div className="col-2">
                <div className="orderbreadcrumb" style={{fontFamily:"cursive" , color: "gray"}}>Home / {eventData.eventNAME}</div>
                <div className="orderformheading" style={{fontFamily:"cursive" , color: "white"}}>{eventData.eventNAME}</div>
                <div className="priceform" style={{fontFamily:"cursive" , color: "white"}}>Rs. 1500.00</div>
                <select onChange={handlePackageChange}>
                  <option>Select Ticket Package</option>
                  {eventData.ticket_packages && eventData.ticket_packages.map((ticket_packages) => (
                    <option key={ticket_packages.packageID} value={ticket_packages.packageID}>
                      {ticket_packages.package_name} - Rs. {ticket_packages.package_price}
                    </option>
                  ))}
                </select>
                <input type="number" defaultValue={1} min="1" max={selectedPackage ? Math.min(selectedPackage.quantity, 100).toString() : "100"} onChange={handleQuantityChange} />
                <button className="btnform" onClick={handleAddToCart}>Add To Cart</button>
              </div>
              {/* Ticket Package Tabs */}
              {eventData.ticket_packages && eventData.ticket_packages.map((ticket_packages) => (
                  <div key={ticket_packages.packageID} style={{display:'inline'}}>
                    <h3 style={{color: '#6a1cae'}}>{ticket_packages.package_name}</h3>
                    <p style={{color: 'white'}}>{ticket_packages.package_description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
