import { Link } from "react-router-dom";
import "./RoomsCard.css";

const RoomDetails = props => {

    return (
        <div className="modalService">
            <h5>{props.service.name}</h5>
            <h6>Price : {`${props.service.price} BDT`} </h6>
            <button className="btn btn-primary">ADD</button>
        </div>
    )
}
export default RoomDetails;