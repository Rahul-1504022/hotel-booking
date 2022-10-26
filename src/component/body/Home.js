import "./Home.css";
import Services from "./Services";
import { connect } from "react-redux";
import { Component } from "react";
import { refreshAll } from "../../redux/actionCreators";


const mapStateToProps = state => {
    return {
        Services: state.Services,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        refreshAll: () => dispatch(refreshAll()),
    }
}

class Home extends Component {
    componentDidMount() {
        this.props.refreshAll();
    }
    render() {
        return (
            <>
                <div className="home-img">
                    <img src="assets/images/hotel-image.jpg" alt="image" width="100%" style={{ backgroundRepeat: "no-repeat", height: "80%", opacity: "0.8" }} />
                    <div className="text-block">
                        <h1>HOTEL ROOM BOOKING</h1>
                    </div>
                </div>
                <div>
                    <br />
                    {/* <Rooms /> */}
                    <br />
                    <Services
                        Services={this.props.Services} />
                </div>
            </>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Home);