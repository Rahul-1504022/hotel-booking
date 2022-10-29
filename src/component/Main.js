import Head from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import { useEffect } from "react";
import { authCheck } from "../redux/authActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}

const Main = props => {
    useEffect(() => {
        props.authCheck();
    }, [])
    return (
        <div>
            <Head />
            <Body />
        </div>
    )
}
export default connect(null, mapDispatchToProps)(Main);