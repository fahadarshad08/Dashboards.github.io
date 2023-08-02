import React, { useState } from "react";
import "./SideBar.css";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUser, AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { VscListUnordered } from "react-icons/vsc";
import { SiGoogleanalytics } from "react-icons/si";
import { RiLogoutBoxRLine, RiAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  MdOutlineMessage,
  MdProductionQuantityLimits,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";
import "./media.css";

function SideBar() {
  const [show, setShow] = useState(false);

  const sidebar = (e) => {
    setShow((current) => !current);
    console.log(e);
  };
  const cancelHandle = () => {
    setShow((current) => !current);
  };

  return (
    <div>
      <span onClick={sidebar} className="main-menu">
        <BiMenu className="menu-bar" />
      </span>
      <div className="sidebar ">
        <div className="logo-details">
          {/* <img src={logo} className="logo" /> */}
          <span className="logo_name" style={{ marginLeft: "px" }}>
            fahad
          </span>
        </div>
        <ul className="nav-links">
          <Link style={{ textDecoration: "none" }} to="/Dashboard">
            <div className="bar-flex-div ">
              <div className="side-div"></div>
              <i
                class="bx-box left2"
                style={{ display: "Flex", hoverMarginLeft: "29px" }}
              >
                <MdDashboard className="icons" />
              </i>
              <li>Dashboard</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Customer">
            <div className="bar-flex-div ">
              <div className="side-div"></div>

              <i class=" bx-box">
                <AiOutlineUser className="icons" />
              </i>
              <li>Coustomer</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Order">
            <div className="bar-flex-div ">
              <div className="side-div"></div>

              <i class=" bx-box">
                <VscListUnordered className="icons" />
              </i>
              <li>Order</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Analytics">
            <div className="bar-flex-div ">
              <div className="side-div"></div>

              <i className="bx bx-box">
                <SiGoogleanalytics className="icons" />
              </i>
              <li className="">Analytics</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Messages">
            <div className="bar-flex-div ">
              <div className="side-div"></div>

              <i className="bx-box">
                <MdOutlineMessage className="icons" />
              </i>
              <li>Messages</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Product">
            <div className="bar-flex-div ">
              <div className="side-div"></div>

              <i className=" bx-box">
                <MdProductionQuantityLimits className="icons" />
              </i>
              <li className="">Products</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Report">
            <div className="bar-flex-div ">
              <div className="side-div"></div>
              <i className="bx-box">
                <MdOutlineReportGmailerrorred className="icons" />
              </i>
              <li> Reports</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Setting">
            <div className="bar-flex-div">
              <div className="side-div"></div>

              <i className=" bx-box">
                <AiFillSetting className="icons" />
              </i>
              <li>Settings</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/AddProduct">
            <div className="bar-flex-div ">
              <div className="side-div"></div>

              <i className=" bx-box">
                <RiAddFill className="icons" />
              </i>
              <li className="">Add Products</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Logout">
            <div className="bar-flex-div log_out ">
              <div className="side-div"></div>

              <i className=" bx-log-out">
                <RiLogoutBoxRLine
                  style={{ color: "#7d8da1" }}
                  className="icons"
                />
              </i>
              <li>Log out</li>
            </div>
          </Link>
        </ul>
      </div>
      {show && (
        <div className="sidebar1">
          <AiOutlineClose onClick={cancelHandle} className="cancel-div" />
          <ul className="nav-links1">
            <Link style={{ textDecoration: "none" }} to="/Dashboard">
              <div className="bar-flex-div1 left">
                <i className="bx-box1">
                  <MdDashboard className="icons" />
                </i>
                <li>Dashboard</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Customer">
              <div className="bar-flex-div1 right1">
                <i className="bx-box1">
                  <AiOutlineUser className="icons" />
                </i>
                <li className="">Coustomer</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Order">
              <div className="bar-flex-div1 left1">
                <i class="bx-box1">
                  <VscListUnordered className="icons" />
                </i>
                <li>Order</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Analytics">
              <div className="bar-flex-div1 right1">
                <i className="bx-box1">
                  <SiGoogleanalytics className="icons" />
                </i>
                <li className="">Analytics</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Message">
              <div className="bar-flex-div1 left1">
                <i className="bx-box1">
                  <MdOutlineMessage className="icons" />
                </i>
                <li>Messages</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Product">
              <div className="bar-flex-div1 right1">
                <i className="bx-box1">
                  <MdProductionQuantityLimits className="icons" />
                </i>
                <li className="">Products</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Report">
              <div className="bar-flex-div1 left1">
                <i className="bx-box1">
                  <MdOutlineReportGmailerrorred className="icons" />
                </i>
                <li>Reports</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Setting">
              <div className="bar-flex-div1 right1">
                <i className=" bx-box1">
                  <AiFillSetting className="icons" />
                </i>
                <li className="">Settings</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/AddProduct">
              <div className="bar-flex-div1 left1">
                <i className="bx-box1">
                  <RiAddFill className="icons" />
                </i>
                <li className="">Add items</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Logout">
              <div className="log_out1">
                <i className=" bx-log-out1">
                  <RiLogoutBoxRLine
                    style={{ color: "#7d8da1" }}
                    className="icons"
                  />
                </i>
                <li>Log out</li>
              </div>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBar;
