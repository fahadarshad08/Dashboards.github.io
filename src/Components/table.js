import React from "react";
import "./table.css";
// import profile2 from "../images/profile-2.jpg";
import { BsCartFill } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import "./media.css";

function table() {
  return (
    <div className="tabel">
      {/* recent-oder */}
      <h2 className="Recent-oder-h2">Recent Oder</h2>
      <div className="recent-oder" style={{ display: "flex" }}>
        <Table>
          <Thead>
            <Tr>
              <Th>Product </Th>
              <Th>Product </Th>
              <Th>Product </Th>
              <Th>Product </Th>
              <Th>payment</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td> drone</Td>
              <Td>68455</Td>
              <Td>due</Td>
              <Td className="warning">pending</Td>
              <Td className="priamry"> Details</Td>
              <Td className="success"> Done</Td>
            </Tr>
            <Tr>
              <Td> drone</Td>
              <Td>68455</Td>
              <Td>due</Td>
              <Td className="warning">pending</Td>
              <Td className="priamry"> Details</Td>
              <Td className="success"> Done</Td>
            </Tr>
            <Tr>
              <Td> drone</Td>
              <Td>68455</Td>
              <Td>due</Td>
              <Td className="warning">pending</Td>
              <Td className="priamry"> Details</Td>
              <Td className="success"> Done</Td>
            </Tr>
            <Tr>
              <Td> drone</Td>
              <Td>68455</Td>
              <Td>due</Td>
              <Td className="warning">pending</Td>
              <Td className="priamry"> Details</Td>
              <Td className="success"> Done</Td>
            </Tr>
          </Tbody>
        </Table>
        <div className="sale-analytics">
          <h2 className="sale-Analytics-h2">sale Analytics</h2>
          <div className="item-offline  " style={{ display: "flex" }}>
            <div className="icon">
              <span className="item-online-icon">
                <BsCartFill />
              </span>
            </div>
            <div className="right-sale">
              <div className="info-sale" style={{ display: "grid" }}>
                <h3>Online oder</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className=" success" style={{ display: "flex" }}>
                +39%
              </h5>
              <h3 style={{ display: "flex" }}>3849 </h3>
            </div>
          </div>

          <div className="item-offline " style={{ display: "flex" }}>
            <div className="icon">
              <span className="Offline-oder-icon">
                <HiShoppingBag />
              </span>
            </div>
            <div className="right-sale">
              <div className="info-sale" style={{ display: "grid" }}>
                <h3>Offline oder</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className=" success" style={{ display: "flex" }}>
                +39%
              </h5>
              <h3 style={{ display: "flex" }}>3849 </h3>
            </div>
          </div>

          <div className="item-offline" style={{ display: "flex" }}>
            <div className="icon">
              <span className="new-customers-icon">
                <FaUserAlt />
              </span>
            </div>
            <div className="right-sale">
              <div className="info-sale" style={{ display: "grid" }}>
                <h3>New Customers</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className=" success" style={{ display: "flex" }}>
                +39%
              </h5>
              <h3 style={{ display: "flex" }}>3849 </h3>
            </div>
          </div>
          <div className="item add-product">
            <div>
              <span>+</span>
              <h3>Add Product</h3>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Link className="link" to="/Dashboard">
        <div className="show-all ">
          <span className="text">show all</span>
        </div>
      </Link>
    </div>
  );
}

export default table;
