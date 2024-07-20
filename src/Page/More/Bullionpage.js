import React from "react";

import "../../css/bullionpage.css";
import { GoldData, GoldratesperGM } from "./GoldRates";
import goldratesimg from "../../Assets/Img/downloadGoladpage.png"
import { Link } from "react-router-dom";
export const Bullionpage = () => {
  return (
    <>
      <div className="Gold_silver_page container-fluid">
        <div className="main-div-goldpage row">
          <div className="left-side-Goldpage col-lg-3">
            <div className="sidesticky">
              <div className="TodaysGoldrate container-fluid pt-4 pb-4">
                <h6>TODAYS'S GOLD, SILVER RATE</h6>
                <div className="Currency-date mt-2 mb-2">
                  <p className="Currency">Ashar 26, 2081 - 10 Jul, 2024</p>
                </div>

                <div className="">
                  <div className="Hallmarkgold">
                    <div className="d-flex">
                      <img
                        src="data:image/png;base64,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"
                        alt="img"
                      />
                      <div className="pertola">
                        <h5>Hallmark</h5>
                        <p>Per Tola</p>
                      </div>
                    </div>
                    <p>NRs.144,100</p>
                  </div>
                  <div className="Hallmarkgold">
                    <div className="d-flex">
                      <img
                        src="data:image/png;base64,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"
                        alt="img"
                      />
                      <div className="pertola">
                        <h5>Hallmark</h5>
                        <p>Per Tola</p>
                      </div>
                    </div>
                    <p>NRs.143,400</p>
                  </div>
                  <div className="Hallmarkgold">
                    <div className="d-flex">
                      <img
                        src="data:image/png;base64,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"
                        alt="img"
                      />
                      <div className="pertola">
                        <h5>Hallmark</h5>
                        <p>Per Tola</p>
                      </div>
                    </div>
                    <p>NRs.1,870</p>
                  </div>
                </div>
                <div className="learnmore">
                  <Link to="/Gold-silver-rates">
                    <p>Learn more</p>
                  </Link>
                </div>
              </div>

              <div className="Bullion_trend bg-color p-0 border-radius">
                <h6>BULLION TREND</h6>
                <img src={goldratesimg} alt="" />
              </div>
            </div>
          </div>

          <div className="Gold_page_center col-lg-9 mt-3">
            <div className="bg-color p-0 p-4">
              <h6>BULLION - GOLD AND SILVER RATES</h6>
              <p>
                Bullion refers to gold, silver, or other precious metals that are
                valued for their purity and rarity. In Nepal, bullion is traded as
                a commodity and is often used as a store of value or as an
                investment.
              </p>
              <p>
                It is important to note that the value of bullion (Daily Gold
                Silver Rates) can fluctuate significantly, as it is influenced by
                a variety of factors such as market demand, economic conditions,
                and geopolitical events.
              </p>
              <p>
                Nepali Patro app and website helps you to get the daily bullion
                rates of Nepal. Nepali Patro can provide you with the current
                prices for bullion products, such as gold and silver.
              </p>
              Source:<a href="https://www.fenegosida.org/">fenegosida</a>
              <ul
                class="nav nav-pills mb-3 justify-content-end"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Rupees per Tola
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Rupees per 10Gm
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Hallmark</th>
                        <th scope="col">Tejabi</th>
                        <th scope="col">Silver</th>
                      </tr>
                    </thead>
                    <tbody>
                      {GoldData.map((Goldinfo, key) => (
                        <>
                          <tr>
                            <th scope="row" style={{ fontWeight: "400" }}>
                              {Goldinfo.Title}
                            </th>
                            <td>{Goldinfo.Hallmark}</td>
                            <td>{Goldinfo.Tejabin}</td>
                            <td>{Goldinfo.Silver}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabindex="0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Hallmark</th>
                        <th scope="col">Tejabi</th>
                        <th scope="col">Silver</th>
                      </tr>
                    </thead>
                    <tbody>
                      {GoldratesperGM.map((Golarates, key) => (
                        <>
                          <tr>
                            <th scope="row" style={{ fontWeight: "400" }}>
                              {/* {Goldinfo.Title} */}

                              {Golarates.Title}
                            </th>
                            <td>{Golarates.Hallmark}</td>
                            <td>{Golarates.Tejabin}</td>
                            <td>{Golarates.Silver}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};