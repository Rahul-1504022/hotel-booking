import { Link } from "react-router-dom";
import "./RoomsCard.css";

const RoomsCard = props => {
    return (
        <div className="roomCard">
            <img src={props.room.imagePath} alt="image" width="30%" />
            <div>
                <p>{props.room.roomName}</p>
                <p>Room Size : {props.room.roomSize}</p>
                <p>{props.room.roomDetails}</p>
                <span style={{ display: "flex", flex: "1", justifyContent: "center" }}>
                    <p style={{ border: "2px solid", padding: "10px", marginRight: "10px" }}>Beds : {props.room.beds}</p>
                    <p style={{ border: "2px solid", padding: "10px" }}>Max Guest : {props.room.maxGuest}</p>
                </span>

            </div>
            <div>
                <p style={{ color: "#921839", fontWeight: "bold", textAlign: "center", marginTop: "30px" }}>Price : {props.room.price}</p>
                {props.LoggedIn ?
                    <button className="btn btn-danger" onClick={props.selectedRooms}>Book Room</button>
                    :
                    <button className="btn btn-info"><Link to="/login" style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}>Login To Book</Link></button>

                }
            </div>

        </div>
    )
}

export default RoomsCard;