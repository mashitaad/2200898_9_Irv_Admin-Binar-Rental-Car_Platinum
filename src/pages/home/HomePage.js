import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../../components/layout/Sidebar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "../../components/layout/Header";
import Mainmenu from "../../components/layout/Mainmenu";

export default function HomePage() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-2 ${toggle ? 'position-fixed' : ''} p-0`}>
          <Mainmenu />
        </div>
        <div className={`col ${toggle ? 'offset-1' : ''}`}>
          <div className="d-flex">
            {toggle && <Sidebar />}
            <div className={`flex-grow-1 ${toggle ? 'ps-3' : ''}`}>
              <Header Toggle={Toggle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
