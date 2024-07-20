import Homepage from "./Component/Homepage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paramarsha from "./Component/Paramarsha/Paramarsha";
import Radiopage from "./Component/Radio/Radiopage";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer/Footer";
import TopNavbar from "./Common/TopNavbar";
import Mycalendar from "./Component/Mycalendar/Mycalendar";
import Loginpage from "./Component/Loginpage/Loginpage";
import Createaccount from "./Component/Loginpage/Createaccount";
import "./App.css";
import { Horoscope } from "./Page/Horoscope";
import Bolgspage from "./Page/BlogPage/Bolgspage";

import News from "./Page/News/News";
import Forex from "./Page/More/Forex";
import DateConverter from "./Page/More/DateConverter";
import Holiday from "./Page/More/Holiday";
import Suva_saitpage from "./Page/More/Suva_saitpage";

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Horoscope" element={<Horoscope />} />
          <Route path="/Paramasha" element={<Paramarsha />} />
          <Route path="/New's" element={<News />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/Bolgs_page" element={<Bolgspage />} />
          <Route path="/Nepali-Radio's" element={<Radiopage />} />
          {/* <Route path="/Gold-silver-rates" element={<Bullionpage />} /> */}
          <Route path="/Nepali-to-english-date" element={<DateConverter />} />
          <Route path="/Nepali-Holiday" element={<Holiday />} />
          <Route path="/Suva-sait" element={<Suva_saitpage />} />
          <Route path="/merocalendar" element={<Mycalendar />} />
          <Route path="/login_mero-calendar" element={<Loginpage />} />
          <Route path="/Create" element={<Createaccount />} />
          {/* <Route path="/blogspage" element={<Blogpagedetails />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
