// import '@babel/polyfill';

import React from "react";
import Transition from "./src/components/Transition";

export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};

export const onClientEntry = () => {
  console.log('%cStart Gatsby Advanced Blog!', 'display: block; color: #9f63f0; font-size: 40px;');
};

