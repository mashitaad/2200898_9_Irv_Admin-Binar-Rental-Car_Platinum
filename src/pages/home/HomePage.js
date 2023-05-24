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
                {/* <div className="col">
                    <Mainmenu />
                </div> */}
                {toggle && <div className="col-2 bg-white vh-100 position-fixed p-0">
                    <Sidebar />
                </div>}
                <div className={`col px-0 ${toggle ? 'offset-2' : ''}`}>
                    <Header Toggle={Toggle} />
                </div>
            </div>
        </div>
    );
}
