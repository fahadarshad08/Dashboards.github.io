// import React from "react";
import React, { useState, useEffect } from "react";
import { SlGraph } from "react-icons/sl";
import { BiBarChart } from "react-icons/bi";
// import { HiMenu } from "react-icons/hi";
import { BsBarChartLine } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import profile from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import "./media.css";
import Table from "./table";
import "./Dashboard.css";

function Dashboard() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const dark = () => {
    if (theme === "light") {
      setTheme("dark");
    }
  };
  const lights = () => {
    if (theme === "dark") {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div className="container ">
        <main>
          <h1> Dashboard</h1>
          <div className="date">
            <input type="date" className="date_transparent" />
          </div>
          <div className="insights">
            <div className="sale">
              <span>
                <BsBarChartLine className="icon" />
              </span>
              <div className=" middle">
                <div className="left">
                  <h3> Total sale </h3>
                  <h1> $8726 </h1>
                </div>
                <div className=" progress">
                  <svg className="circle">
                    <circle cx="50" cy="50" r="40"></circle>
                  </svg>

                  <p className="number">81%</p>
                </div>
              </div>
            </div>
            {/* end of slae */}
            <div className="expenses">
              <span>
                <BiBarChart className="icon" />
              </span>
              <div className=" middle">
                <div className="left">
                  <h3> Total Expenses</h3>
                  <h1> $2690 </h1>
                </div>
                <div className=" progress">
                  <svg className="circle">
                    <circle cx="50" cy="50" r="40"></circle>
                  </svg>
                  <p className="number">81%</p>
                </div>
              </div>
            </div>
            <div className="income">
              <span>
                <SlGraph className="icon" />
              </span>
              <div className=" middle">
                <div className="left">
                  <h3> Total Income </h3>
                  <h1> $3690 </h1>
                </div>
                <div className=" progress">
                  <svg className="circle">
                    <circle cx="50" cy="50" r="40"></circle>
                  </svg>
                  <p className="number">81%</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="right">
          <div className="top" style={{ height: "fit-content" }}>
            <div className="dark-mode">
              <button onClick={lights} className="sun">
                <MdLightMode className="iconss" />
              </button>
              <button onClick={dark} className="moon">
                <MdDarkMode className="moo" />
              </button>
            </div>
            <div className="profile">
              <div className="info">
                <p className="admin-name">
                  fahad <br />
                  <span className="text-muted-admin">admin</span>
                </p>
                <div className="profile-photo-1">
                  <img className="profile-photo " src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="recent-update">
            <h2>recent update </h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                  <img className="profile-photo " src={profile2} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>fahad</b> recive is order of night lion
                  </p>
                  <small className="text-muted">2 mint ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img className="profile-photo " src={profile2} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>fahad</b> recive is order of night lion
                  </p>
                  <small className="text-muted">2 mint ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img className="profile-photo " src={profile2} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>fahad</b> recive is order of night lion
                  </p>
                  <small className="text-muted">2 mint ago</small>
                </div>
              </div>
            </div>
          </div>
          {/* end of top  */}
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Dashboard;
