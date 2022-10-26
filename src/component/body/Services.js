import { Link } from "react-router-dom";
import "./Services.css";


const Services = props => {
    const service = props.Services.map(item => {
        return (<div className="allservice" key={item.serviceId} style={{ textAlign: "center", borderRadius: "10px", margin: "20px", padding: "15px", backgroundColor: "white" }}>
            <h5>{item.name}</h5>
            {item.price === 0 ? <p style={{ color: "green", fontWeight: "700" }}>free</p> : <p style={{ color: "green", fontWeight: "700" }}> {item.price} BDT</p>}
            {/* <p style={{ color: "green", fontWeight: "700" }}>{{ item.price } === 0 ? "free" : `${item.price} BDT`}</p> */}
        </div>)
    }
    )
    return (
        <div style={{ backgroundColor: "antiquewhite", margin: "10px", boxShadow: "", borderRadius: "10px", color: "black", padding: "100px 20px" }}>
            <h1 >Our Services
            </h1>
            <div className="services">
                {service}
            </div>
        </div>

    )
}
export default Services;