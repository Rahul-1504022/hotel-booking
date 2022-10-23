import "./Home.css";
import Services from "./Services";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        Services: state.Services,
    }
}

const Home = props => {
    return (
        <>
            <div className="home-img">
                <img src="assets/images/hotel-image.jpg" alt="image" width="100%" style={{ backgroundRepeat: "no-repeat", height: "80%", opacity: "0.8" }} />
                <div className="text-block">
                    <h1>HOTEL ROOM BOOKING</h1>
                </div>
            </div>
            <div>
                Our Rooms
                <br />
                {/* <Rooms /> */}
                <br />
                <Services
                    Services={props.Services} />
            </div>
        </>
    )
}
export default connect(mapStateToProps)(Home);