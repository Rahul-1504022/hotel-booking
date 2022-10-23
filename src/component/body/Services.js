import { Link } from "react-router-dom";
import "./Services.css";


const Services = props => {
    const service = props.Services.map(item => {
        return (<div className="allservice" key={item.serviceId} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset", textAlign: "center", borderRadius: "10px", margin: "20px", padding: "15px", backgroundColor: "#48185C" }}>
            <h5>{item.name}</h5>
            <p style={{ color: "green", fontWeight: "700" }}>{`${item.price}` === 0 ? "free" : `${item.price} BDT`}</p>
        </div>)
    }
    )
    return (
        <div style={{ backgroundColor: "#317B7C", margin: "10px", boxShadow: "", borderRadius: "10px", color: "white", padding: "100px 20px" }}>
            <h1 >Our Services
            </h1>
            <div className="services">
                {service}
            </div>
        </div>

    )
}
export default Services;