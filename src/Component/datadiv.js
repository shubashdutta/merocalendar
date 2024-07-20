import React from "react";
import { items } from "../Data/Data";

const datadiv = () => {
  return (
    <>
      <div className="centerpagediv">
        {items.map((item, key) => (
          <>
            <div className="div1">
              <h5>{item.title}</h5>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default datadiv;
