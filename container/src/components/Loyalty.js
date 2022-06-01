import React, { useEffect, useRef } from "react";
import {mount} from "loyalty/Loyalty";

const LoyaltyModule = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, props);  
  }, []);   
  return <div ref={ref} />;
};

export default LoyaltyModule;