// import React from "react";
// import { SidebarOnly } from "../SidebarOnly";
// import { IoIosArrowBack } from "react-icons/io";

// import Calendardowndiv from "../datadiv";
// // import { NewsData } from "../Newspagedata/Newsdata";
// import Newsdiv from "../Newsdiv";
// import { Suvapagedata } from "../../Data/Suvapagedata";

// import "../../css/holiday.css";
// import NepaliBlogdiv from "../NepaliBlogdiv";
// import { Link } from "react-router-dom";

// const Suva_saitpage = () => {
//   return (
//     <>
//       <div className="side-div1">
//         <SidebarOnly />
//         <div className="centerdiv">
//           <div className="centerdivtopitem">
//             <div className="">
//               <div className="Holiday_page">
//                 <h6>SUVA SAIT AND MUHURAT</h6>
//                 <Link to="/">
//                   <button>
//                     <IoIosArrowBack style={{ marginBottom: "5px" }} />
//                     Back to calendar
//                   </button>
//                 </Link>
//               </div>

//               <hr />

//               <div className="Suva_page_ptag">
//                 <p>
//                   Suva Sait and Muhurat are two important concepts in Vaidik
//                   Sanatan Hindu astrology. Get authentic and correct Suva Sait
//                   and Muhurat on <Link to={'/'}>Nepali Patro app.</Link>
//                 </p>

//                 <p>
//                   Suva Sait is a period of time that is considered inauspicious
//                   or unlucky in Sanatan Hindu astrology. It is believed that
//                   certain activities should be avoided during Suva Sait, as they
//                   are more likely to result in negative outcomes. Suva Sait is
//                   calculated based on the positions of the sun and the moon, and
//                   it is believed to be a time of increased spiritual and
//                   astrological influences.
//                 </p>

//                 <p>
//                   Muhurat, on the other hand, is a period of time that is
//                   considered auspicious or lucky in Vaidik Sanatan Hindu
//                   astrology. Muhurat is believed to be a time when the positive
//                   influences of the planets and the stars are at their
//                   strongest, and it is considered to be an ideal time to start
//                   new projects, make important decisions, or perform important
//                   ritujals.
//                 </p>
//               </div>

//               <div className="suva_page">
//                 <select>
//                   <option value="date">2081</option>
//                   <option value="date">2082</option>
//                   <option value="date">2083</option>
//                   <option value="date">2084</option>
//                   <option value="date">2085</option>
//                   <option value="date">2086</option>
//                 </select>
//               </div>
//               <div className="puja_type">
//                 <select>
//                   <option value="Rudri">Rudri</option>
//                   <option value="pasal">pasal</option>
//                   <option value="Hom">Hom</option>
//                   <option value="pasni">pasni</option>
//                   <option value="Biwaha">Biwaha</option>
//                   <option value="Home">Home</option>
//                 </select>
//               </div>

//               {Suvapagedata.map((data, key) => (
//                 <div className="month_name">
//                   <h6>{data.Title}</h6>
//                   {/* <p>{data.date}</p> */}
//                 </div>
//               ))}

//               <Calendardowndiv />

//               <Newsdiv />

//               <NepaliBlogdiv />
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Suva_saitpage;
