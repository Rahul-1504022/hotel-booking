import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const AddServices = props => {
    return (
        <div style={{ backgroundColor: "blue" }}>
            <Card style={{ width: "18rem" }}>
                <CardBody>
                    <CardTitle tag="h5">
                        {props.service.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Price : {`${props.service.price} BDT`}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}
export default AddServices;