import SelectedRoom from "../checkout/SelectedRooms";
import AddServices from "../checkout/AddServices";
import { Card, CardBody, CardTitle } from "reactstrap";

const LoadUserHistory = props => {
    let addServices = null;
    if (props.history.AddServices) {
        addServices = props.history.AddServices.map(item => {
            return (
                <AddServices
                    key={item.serviceId}
                    service={item} />
            )
        })
    }

    return (
        <div style={{ display: "flex", flex: "1", flexWrap: "wrap", gap: "30px", margin: "60px 20px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", padding: "20px" }}>
            <div>
                <SelectedRoom
                    SelectedRoom={props.history.SelectedRoom}
                />
            </div>
            <div>
                {addServices ? addServices : null}
            </div>
            <div>
                <Card style={{ width: "18rem" }}>
                    <CardBody>
                        <CardTitle>
                            <p style={{ color: "#3D50C8", fontWeight: "bold", }}>Order ID : {props.history.id}</p>
                            <p style={{ color: "green", fontWeight: "bold", }}>Total Price : {props.history.Price}</p>
                        </CardTitle>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default LoadUserHistory;