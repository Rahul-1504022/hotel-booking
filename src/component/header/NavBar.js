import { Link } from "react-router-dom";
import "./NavBar.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        LoggedIn: state.LoggedIn,
    }
}

const NavBar = props => {
    let nav = null;
    if (props.LoggedIn) {
        nav = <>
            <Link to="#">HISTORY</Link>
            <Link to="/logout">LOGOUT</Link>
        </>
    } else {
        nav = <Link to="/login">LOGIN</Link>
    }

    return (
        <div className="navlink">
            <div className="navlinkul">
                <Link to="/">HOME</Link>
                <Link to="/rooms">ROOMS</Link>
                <Link to="#">ABOUT</Link>
                {nav}
            </div>
        </div>
    )
}
export default connect(mapStateToProps)(NavBar);