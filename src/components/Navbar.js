import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
// import ReorderIcon from "@material-ui/icons/Reorder"
// import ReorderIcon from '@mui/icons-material/ReorderIcon';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {MdReorder} from 'react-icons/md'

function Navbar () {
    const [expandNavbbar, setExpandNavbar] = useState(false);

    // below logic is used to close the expansion of page in short viewport
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return(
        <div className="navbar" id={expandNavbbar ? "open" : "close"}>
            <div className="toggleButton">
                <button 
                    onClick={()=>{
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <MdReorder  />
                </button>
                {/* <button><AccessTimeIcon/></button> */}
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
            </div>
        </div>
    )
}

export default Navbar;