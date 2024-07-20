import React from "react";

import "../../css/footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="top-footer">
          <div className="container">
            <h6 className="">Mero-CALENDAR - OUR TIME, OUR PRIDE</h6>
            <p>
              Merocalendar - A complete ‘Nepali Calendar’ is online/digital
              traditional Lunar Calendar (Bikram Sambat / Vikram Samvat
              Calendar) 2081 BS. It keeps track of detailed authentic
              information about important dates, national events, Nepali
              Culture, Nepali Festivals, Vedic Sanatan Hindu activities, Nepali
              Rashifal, Nepali traditions, and rituals. It is full of
              information related to festivals and cultural activities of all
              castes of Nepal in our own Nepali language. Nepal’s first mobile
              app/application is available in all the platform i.e. Website,
              <Link to={"/"} target="_blank">
                iOS & Android . (or Click here to Download)
              </Link>
            </p>

            <p>
              In Nepal, Bikram Sambat / Vikram Samvat (B.S) is considered as a
              recognized, official Nepali Calendar, Nepali Patro with National
              sovereignty. Every year “Nepal Panchanga Nirnayak Samiti”
              officially leads to publishing all the dates & panchanga related
              information for the new Nepali Calendar / Nepali Patro. On this
              basis, the National Calendar or calendar of Nepal is prepared.
              Each year, the new Sambat starts after Chaitra Sankranti
              (mid-April). Bikram Sambat / Vikram Samvat is the most scientific
              of all the world’s calendar, based on the speed and nature of the
              sun.
            </p>
            <p>
              Using Merocalendar anyone easily can create trustworthy Kundali /
              Janampatri (using accurate Vedic Astrology principles) just adding
              Birth Place, Birth Time & Date of Birth, & this is free.
            </p>
          </div>
        </div>

        <div className="container footer-down">
          <div className="row row-cols-lg-5 row-cols-md-4  row-cols-sm-6">
            <div className="col">
              <div className="Nepali_calendar">
                <h4>नेपाली पात्रो २०८१</h4>
                <h4>NEPALI CALENDAR 2081</h4>

                <ul>
                  <li>वैशाख - Baisakh</li>
                  <li>जेठ - Jestha</li>
                  <li>असार - Ashar</li>
                  <li>साउन - Shrawan</li>
                  <li>भदौ - Bhadra</li>
                  <li>असोज - Ashoj</li>
                  <li>कार्तिक - Kartik</li>
                  <li>मंसिर - Mangsir</li>
                  <li>पौष - Poush</li>
                  <li>माघ - Magh</li>
                  <li>फागुन - Falgun</li>
                  <li>चैत - Chaitra</li>
                </ul>
              </div>
            </div>
            <div className="col ">
              <div className="DAILY_RASHIFAL">
                <h4>आजको राशिफल</h4>
                <h4>DAILY RASHIFAL</h4>

                <ul>
                  <li>मेष - Aries</li>
                  <li>वृष - Taurus</li>
                  <li>मिथुन - Gemini</li>
                  <li>कर्कट - Cancer</li>
                  <li>सिंह - Leo</li>
                  <li>कन्या - Virgo</li>
                  <li>तुला - Libra</li>
                  <li>वृश्चिक - Scorpio</li>
                  <li>धनु - Sagittarius</li>
                  <li>मकर - Capricorn</li>
                  <li>कुम्भ - Aquarius</li>
                  <li>मीन - Pisces</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="SERVICES">
                <h4>सेवाहरू</h4>
                <h4>SERVICES</h4>

                <ul>
                  <li>Calendar</li>
                  <li>Horoscope</li>
                  <li>Blogs</li>
                  <li>Paramarsha</li>
                  <li>News</li>
                  <li>Suva Sait</li>
                  <li>Government Holidays</li>
                  <li>Subscription</li>
                  <li>Nepal T20I Triangular Series, 2024</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="NEPALI PATRO">
                <h4>नेपाली पात्रो</h4>
                <h4>NEPALI PATRO</h4>

                <ul>
                  <li>About Us</li>
                  <li>Apps</li>
                  <li>Contact</li>
                  <li>Feedback and Suggestions</li>
                  <li>Close Account</li>
                </ul>

                <ul className="support">
                  <h4>SALES & SUPPORT</h4>
                  <li>
                    <Link to={"tel:6031112298"}>
                      <FaPhoneAlt />
                      +977XXXXXXXXX
                    </Link>
                  </li>

                  <li>
                    <Link to={"mailto:info@NectarDigit.com.np"}>
                      <CiMail />
                      info@NectarDigit.com.np
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="UTILITIES">
                <h4>युटिलिटिज</h4>
                <h4>UTILITIES</h4>

                <ul>
                  <li>Mac Statusbar App</li>
                  <li>Web Widget</li>
                  <li>Date Converter</li>
                  <li>Bullion</li>
                  <li>Close Account</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="d-flex download-app align-items-center">
              <div>
                <h4>एप डाउनलोड गर्नुहोस्</h4>
                <h4>DOWNLOAD APPS</h4>
              </div>
              <div className="d-flex">
                <img
                  src="https://nepalipatro.com.np/static/media/playstore.bb8a8bd1.svg"
                  alt=""
                />
                <img
                  src="https://nepalipatro.com.np/static/media/iOS.f9ec86b1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-reserved">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0 p-0">
              Copyright &copy; 2024. Mero Calendar All Rights Reserved
            </p>
            <p className="m-0 p-0">
              Website Designed By{" "}
              <Link to="https://nectardigit.com/" target="_blank">
                Nectar Digit
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
