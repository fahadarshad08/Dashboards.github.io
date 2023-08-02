// import React, { useState, useEffect } from "react";
// // import img from "../../assects/image.jpg";
// import img from "../images/profile-1.jpg";

// import "./navbar.css";
// import { BsSunFill } from "react-icons/bs";
// import { MdDarkMode } from "react-icons/md";

// function Navber() {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   // const [light, setlight] = useState(localStorage.getItem("theme") || "light");
//   const dark = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     }
//   };
//   const lights = () => {
//     if (theme === "dark") {
//       setTheme("light");
//     }
//   };
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <div>
//       {/* style="font-size:30px;cursor:pointer" */}
//       <div className="nav-div">
//         <div className="left-div">
//           <h3>Dashboard</h3>

//           <div className="date">
//             <input type="date" />
//           </div>
//         </div>
//         <div className="right-div">
//           <div className="dark-mode">
//             <button onClick={lights} className="sun">
//               <BsSunFill className="iconss" />
//             </button>
//             <button onClick={dark} className="moon">
//               <MdDarkMode className="moo" />
//             </button>
//           </div>
//           <div className="person-div">
//             <h3 style={{ marginTop: "20px" }}>
//               <span style={{ fontSize: "11px" }}> hey, </span> Daniel
//               <br />
//               <span
//                 style={{
//                   fontWeight: "200",
//                   marginLeft: "30px",
//                   marginTop: "15px",
//                   fontSize: "10px",
//                 }}
//               >
//                 Admin
//               </span>
//             </h3>
//             <img src={img} className="per-icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navber;
