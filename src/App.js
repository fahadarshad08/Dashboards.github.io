import "./App.css";
import SideBar from "../src/Components/SideBar";
import Dashboard from "../src/Components/Dashboard";
import Logout from "../src/Components/Dashboard";
import Message from "../src/Components/Dashboard";
import Product from "../src/Components/Dashboard";
import Report from "../src/Components/Dashboard";
import Order from "../src/Components/Dashboard";
import Service from "../src/Components/Dashboard";
import Setting from "../src/Components/Dashboard";
import Analytics from "./Components/Analytics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [Mode, setMode] = useState("");

  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <SideBar />
          <Routes>
            {/* <Route path="/Navbar" element={<Navbar />}></Route> */}
            <Route path="/SideBar" element={<SideBar />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Message" element={<Message />}></Route>
            <Route path="/Order" element={<Order />}></Route>
            <Route path="/Analytics" element={<Analytics />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/Report" element={<Report />}></Route>
            <Route path="/Service" element={<Service />}></Route>
            <Route path="/Setting" element={<Setting />}></Route>
            <Route path="/Logout" element={<Logout />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
