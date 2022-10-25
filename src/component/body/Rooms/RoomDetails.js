import { useState } from "react";
import { Link } from "react-router-dom";
import "./RoomsCard.css";
import { addService, removeService } from "../../../redux/actionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        addService: (service) => dispatch(addService(service)),
        removeService: (service) => dispatch(removeService(service)),
    }
}

const RoomDetails = props => {

    const [isAdded, setIsAdded] = useState(false);

    const toggleAdded = () => {
        setIsAdded(!isAdded);
        props.addService(props.service);
    }

    const toggleRemove = () => {
        setIsAdded(!isAdded);
        props.removeService(props.service);
    }

    return (
        <div className="modalService">
            <h5>{props.service.name}</h5>
            <h6>Price : {`${props.service.price} BDT`} </h6>
            <button className={isAdded ? "btn btn-success" : "btn btn-primary"} onClick={toggleAdded} disabled={isAdded} >{isAdded ? "Service Added" : "ADD"}</button>
            <button className="btn btn-danger" onClick={toggleRemove} disabled={!isAdded} style={{ margin: "10px" }} >Remove</button>
        </div>
    )
}
export default connect(null, mapDispatchToProps)(RoomDetails);