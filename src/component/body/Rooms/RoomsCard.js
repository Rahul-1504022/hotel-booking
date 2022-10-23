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
                <p>Price : {props.room.price}</p>
                <button className="btn btn-danger" onClick={props.selectedRooms}>Book Room</button>
            </div>

        </div>
    )
}

export default RoomsCard;