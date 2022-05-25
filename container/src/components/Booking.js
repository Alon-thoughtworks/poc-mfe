import React, { useEffect, useRef } from "react";
import {mount} from "booking/Booking";

const Booking = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();  
  }, []);   
  return <div className=""><app-root></app-root></div>;
};

export default Booking;