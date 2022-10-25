import Home from "./Home";
import { Routes, Route, Navigate } from "react-router";
import Rooms from "./Rooms/Rooms";
import Summary from "./checkout/Summary";
import Checkout from "./checkout/Checkout";
import { connect } from "react-redux";
import Auth from "../Auth/Auth";
import Logout from "../Auth/Logout";

const mapStateToProps = state => {
    return {
        LoggedIn: state.LoggedIn,
    }
}

const Body = props => {

    let routes = null;
    if (props.LoggedIn) {
        routes = <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    }
    else {
        routes = <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/login" element={<Auth />} />
        </Routes>
    }


    return (
        <div>
            {routes}
        </div>
    )
}
export default connect(mapStateToProps)(Body);