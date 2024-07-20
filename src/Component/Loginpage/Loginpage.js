import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";

import "./createpage.css";

import "./Loginpage.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Loginpage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  return (
    <>
      <div className='wrapper wrapper-content animated fadeIn page-pad pt-0"'>
        <div className="np-sub-header text-center " id="Logingpage">
          <h1 className="my-1 text-capitalize">Please Login</h1>
          <div className="mb-4">
            Please register/login to access Mero Calendar services..
          </div>
        </div>
        <div className="container-fluid px-0 pb-5 px-sm-3  ">
          <div
            className="card shadow-none pb-0 darkmode"
            style={{ marginTop: "-30px" }}
          >
            <div className="card-body">
              <div className="row justify-content-center reverse-row">
                <div className="col-12 col-sm-6 ">
                  <h2 className="h1 mb-5 np-color">Welcome to Mero Calendar</h2>
                  <p>
                    Mero Calendar ("मेरो क्यालेन्डर") - Nepali Calendar is
                    online traditional Lunar Calendar/ Bikram Sambat Calendar.
                    It helps to keep track of important dates, events and
                    festivals in our own Nepali native language. Nepali dates,
                    events and festivals be remembered and promoted using this
                    tool.
                  </p>
                  <p>
                    Signing up to our services will help users track own events
                    based on Lunisolar Tithi, Bikram Sambat and Iswi Sambat.
                    User can create their own calendar and add personal events
                    and reminders as necessary.
                  </p>
                </div>
                <div className="col-12 col-sm-4 pt-4">
                  <div className="d-row align-items-center justify-content-center">
                    <div className="mx-2 mb-3 d-flex align-items-center justify-content-center"></div>
                    <div className="mx-2 mb-3 d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-loginpage btn-facebook"
                        id="Facebook"
                      >
                        <FaSquareFacebook />

                        <span className="btn-name">Facebook Sign in</span>
                      </button>
                    </div>
                    <div className="mx-2 pb-3 d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-loginpage btn-google"
                        id="Google"
                      >
                        <FcGoogle />

                        <span className="btn-name">Google Sign in</span>
                      </button>
                    </div>
                    <div className="mx-2 pb-3 d-flex align-items-center justify-content-center">
                      <button className="btn btn-loginpage btn-email">
                        <MdOutlineMailLock />

                        <span className="btn-name">Email Sign in</span>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-5">
                    <hr />
                    <p className="text-center mt-4 mb-1">
                      Do not have an account??
                    </p>
                  </div>
                  <div className="form-row text-center mb-3">
                    <div className="col d-flex align-items-center justify-content-center">
                      <button
                        classNameName="btn btn-loginpage btn-email-signup"
                        onClick={handleButtonClick}
                      >
                        <FaSignInAlt />
                        Create an Account
                      </button>

                      {showForm && (
                        <div classNameName="CreatedAccount  ">
                          <h5>Sign UP</h5>
                          <form classNameName="row ">
                            <label>Email*</label>
                            <input type="email" placeholder="Email" />

                            <label>FullName</label>

                            <input type="text" placeholder="Enter name" />
                            <label>Mobile Number*</label>

                            <input
                              text="number"
                              placeholder="Enter mobile number"
                            />

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

                            <input
                              type="password"
                              placeholder="enter password"
                            />

                            <label>Re-type password</label>

                            <input
                              type="password"
                              placeholder="re-type password"
                            />
                          </form>

                          <div classNameName="row   mt-5">
                            <button
                              type="summit"
                              classNameName="mb-3 createpagebtn"
                            >
                              Sing Up
                            </button>
                            <button
                              classNameName="cancel"
                              onClick={() => setShowForm(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="small text-center">
                    By signing up, you accept and agree all{" "}
                    <u>
                      <a href="/terms-of-service"> Terms of Service </a>
                    </u>
                    and
                    <u>
                      <a href="/policies"> Privacy Policy </a>
                    </u>
                    .*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
