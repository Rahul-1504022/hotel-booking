
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";


const SelectedRoom = props => {
    return (
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
export default SelectedRoom;