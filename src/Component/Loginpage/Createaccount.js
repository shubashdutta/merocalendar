import React from "react";

import "./createpage.css";

const Createaccount = () => {
  return (
    <>
      <div className="CreatedAccount">
        <h5>Sign UP</h5>
        <form className="row">
          <label>Email*</label>
          <input type="email" placeholder="Email" />

          <label>FullName</label>

          <input type="text" placeholder="Enter name" />
          <label>Mobile Number*</label>

          <input text="number" placeholder="Enter mobile number" />

          <label>Date_of_birth</label>

          <input type="date" placeholder="Enter date" />

          <label>Gender</label>

          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label>Address*</label>

          <input type="text" placeholder="enter address" />
          <label>Password</label>

          <input type="password" placeholder="enter password" />

          <label>Re-type password</label>

          <input type="password" placeholder="re-type password" />
        </form>

        <div className="row col-3  mt-5">
          <button type="summit" className="mb-3 createpagebtn">
            Sing Up
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Createaccount;
