import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const mapStateToProps = state => {
    return {
        Price: state.Price,
        SelectedRoom: state.SelectedRoom,
    }
}

const Summary = props => {
    console.log(props.SelectedRoom);
    return (
        // <div>
        //     <h4>Rooms Summary</h4>
        //     <h6>{props.SelectedRoom.roomName}</h6>
        //     <p>Price : {`${props.SelectedRoom.price} BDT`}</p>
        // </div>
        <Card style={{ width: "18rem" }}>
            <img src={props.SelectedRoom.imagePath} alt="image" />
            <CardBody>
                <CardTitle tag="h5">
                    {props.SelectedRoom.roomName}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Price : {`${props.SelectedRoom.price} BDT`}
                </CardSubtitle>
                <CardText>
                    {props.SelectedRoom.roomDetails}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default connect(mapStateToProps)(Summary);