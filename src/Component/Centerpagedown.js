import React from "react";

import "../css/centerpagediv.css"

import Calendardowndiv from "./datadiv";
import Newsdiv from "./Newsdiv";
import NepaliBlogdiv from "./NepaliBlogdiv";

const Centerpagedown = () => {
  return (
    <>
      <Calendardowndiv />
      <Newsdiv />
      <NepaliBlogdiv />
    </>
  );
};

export default Centerpagedown;
