import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/authActionCreators";


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
        window.location.reload();
    }


    render() {
        return (
            null
        );
    }
}

export default connect(null, mapDispatchToProps)(Logout);
