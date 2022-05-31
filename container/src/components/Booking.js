import React, {useContext, useEffect, useRef} from "react";
import { ThemeContext } from 'styled-components'
import {mount} from "booking/Booking";

const Booking = (props) => {
  const currentTheme = useContext(ThemeContext);

  // const ref = useRef(null);
  useEffect(() => {
    mount(currentTheme);
  }, []);   
  return <div className=""><app-root></app-root></div>;
};

export default Booking;