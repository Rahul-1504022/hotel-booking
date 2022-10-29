import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import SelectedRoom from "./SelectedRooms";
import AddServices from "./AddServices";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        Price: state.Price,
        SelectedRoom: state.SelectedRoom,
        AddServices: state.AddServices,
    }
}



const Summary = props => {

    const addServices = props.AddServices.map(item => {
        return (
            <AddServices
                key={item.serviceId}
                service={item} />
        )
    })
    document.title = "Summary";

    return (
        <div style={{ display: "flex", flex: "1", flexWrap: "wrap", gap: "30px", margin: "40px 20px" }}>
            <div>
                <SelectedRoom
                    SelectedRoom={props.SelectedRoom}
                />
            </div>
            <div>
                {addServices ? addServices : null}
            </div>
            <div>
                <Card style={{ width: "18rem" }}>
                    <CardBody>
                        <CardTitle>
                            Total Price : {props.Price}
                            <br />
                            <button className="btn btn-primary"><Link to="/checkout" style={{ textDecoration: "none", color: "white", fontWeight: "500" }}>Checkout</Link></button>
                        </CardTitle>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Summary);