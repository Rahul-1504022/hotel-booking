import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
    return (
        <div className="navlink">
            <div className="navlinkul">
                <Link to="#">HOME</Link>
                <Link to="#">ROOMS</Link>
                <Link to="#">ABOUT</Link>
                <Link to="#">CONTACT</Link>
                <Link to="#">LOGIN</Link>
            </div>
        </div>
    )
}
export default NavBar;