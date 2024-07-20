import React from "react";
import "../../css/forex.css";
import img from "../../Assets/Img/download.png";
import { Currencydata } from "./Countrydata";
import { Link } from "react-router-dom";
import "../../css/topnavbar.css";
const Forex = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="sidesticky">
              <div className="Currency_Converter container-fluid pt-3 pb-3">
                <h6>CURRENCY CONVERTER</h6>
                <div className="Currency-date">
                  <p className="Currency">Ashar 26, 2081 - 10 Jul, 2024</p>
                </div>

                <div>
                  <p>Amount</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div>
                        <input type="text" name="amount" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <select
                        name="selectcountry"
                        id="country"
                        className="form-control"
                      >
                        <option value="U.S Dollar">U.S Dollar</option>
                        <option value="India">India Rupee</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <p>Converted to</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div>
                        <input type="text" name="amount" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <select
                        name="selectcountrytochnage"
                        id="countrychnage"
                        className="form-control"
                      >
                        <option value="Nepali">Nepalese Rupee</option>
                        <option value="India">India Rupee</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="currencyhtag mt-2">
                  <h5>1 U.S Dollar equals</h5>
                  <h5 style={{ color: "#FF612F" }}>133.28 Nepalese Rupee</h5>

                  <div className="learnmore">
                    <Link to="/Gold-silver-rates">
                      <p>Learn more</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-color border-radius mt-4">
                <div className="left_side_trend">
                  <h6>CURRENCY TREND</h6>
                  <p>
                    View rise and fall of currency compared to Nepalese Rupee.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <select>
                      <option value="">U.S Dollar</option>
                      <option value="">U.S Dollar</option>
                      <option value="">U.S Dollar</option>
                      <option value="">U.S Dollar</option>
                    </select>

                    <div>
                      <button>2D</button>
                      <button>7D</button>
                      <button>1M</button>
                      <button>3M</button>
                    </div>
                  </div>

                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 pt-3">
            <div className="bg-color">
              <h6>FOREIGN EXCHANGE RATE</h6>

              <p>
                Forex rates, also known as foreign exchange rates, are the rates at
                which one currency can be exchanged for another. These rates
                fluctuate constantly, as they are influenced by a variety of factors
                such as economic conditions, political events, and supply and demand
                for particular currencies.
              </p>

              <p>
                Forex rates are typically quoted in pairs, with the first currency
                being the base currency and the second currency being the quote
                currency. If the forex rate for the exchange rate between the
                Nepalese rupee (NRs) and the US dollar (USD) fluctuates constantly,
                as it is influenced by a variety of factors such as economic
                conditions, political events, and supply and demand for each
                currency.
              </p>

              <p>
                To convert NRs to USD, NRs to EUR, NRs to YEN you can use Nepali
                Patro app or web for daily updated rates. Nepali patro can provide
                you with the current exchange rate between the two currencies, and
                allow you to calculate the equivalent value in your options of
                currency for a given amount of NRs.
              </p>

              <div className="d-flex justify-content-between ">
                <h6
                  style={{ width: "250px", color: "#FF5722", paddingLeft: "30px" }}
                >
                  Foreign Exchange Rates Ashar 28, 2081 (12 July, 2024)
                </h6>
                <p>
                  Source:
                  <a href="https://www.nrb.org.np/" style={{ color: "black" }}>
                    Nepal Rastra Bank
                  </a>
                </p>
              </div>

              <h5 className="px-4">Fixed Rate</h5>

              <div className="Curreny_forex">
                <ul>
                  <li>currency</li>
                  <li> Unit</li>
                  <li>Buying</li>
                  <li>Selling</li>
                </ul>
              </div>
              <div className="Curreny_Indian">
                {/* <img
                    src="https://nepalipatro.com.np/images/flags/flag_INR.png"
                    alt=""
                  /> */}
                <ul>
                  <li>indian Rupee(INR)</li>
                  <li> 100</li>
                  <li>160</li>
                  <li>160.15</li>
                </ul>
              </div>

              <h4>Open Market Rates</h4>
              <table class="table table-hover ">
                <thead>
                  <tr>
                    <th scope="col">Curreny</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Buying</th>
                    <th scope="col">Selling</th>
                  </tr>
                </thead>

                {Currencydata.map((Currencydata, key) => (
                  <tbody>
                    <tr>
                      <td>{Currencydata.Name}</td>
                      <td>{Currencydata.Unit} </td>
                      <td>{Currencydata.Buying}</td>
                      <td>{Currencydata.Selling}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forex;
