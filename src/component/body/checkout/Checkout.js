import { Formik } from "formik";
import { finalSubmit } from "../../../redux/actionCreators";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

const mapDispatchToProps = dispatch => {
    return {
        finalSubmit: (user, Rooms, token) => dispatch(finalSubmit(user, Rooms, token)),
    }
}

const mapStateToProps = state => {
    return {
        Rooms: state.Rooms,
        SuccessMsg: state.SuccessMsg,
        userId: state.userId,
        SelectedRoom: state.SelectedRoom,
        Price: state.Price,
        AddServices: state.AddServices,
        token: state.token,
    }
}

const Checkout = props => {
    document.title = "Checkout";
    let form = null;
    {
        form = (
            <Formik
                initialValues={{
                    name: "",
                    phoneNumber: "",
                }}
                onSubmit={
                    (values) => {
                        const userDetails = {
                            userId: props.userId,
                            SelectedRoom: props.SelectedRoom,
                            Price: props.Price,
                            AddServices: props.AddServices,
                            User: values,

                        }
                        props.finalSubmit(userDetails, props.Rooms, props.token);
                    }
                }

                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = "Name Required";
                    }

                    if (!values.phoneNumber) {
                        errors.phoneNumber = "Phone Number Required";
                    }


                    //console.log("Errors", errors);
                    return errors;
                }

                }
            >
                {({ values, handleChange, handleSubmit, errors }) => <div className="container" style={{ border: "2px solid wheat", padding: "50px 80px", textAlign: "center", borderRadius: "10px" }}>
                    <button style={{ width: "100%", backgroundColor: "#800000", color: "white" }} className="btn btn-large">Checkout Form</button>
                    <br />
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            className="form-control"
                            value={values.name}
                            onChange={handleChange}
                            validate />
                        <p style={{ color: "red" }}>{errors.name}</p>
                        <br />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter Your Phone No."
                            className="form-control"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            validate />
                        <p style={{ color: "red" }}>{errors.phoneNumber}</p>
                        <br />
                        <br />
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>}
            </Formik>
        )
    }
    return (
        <div style={{ margin: "40px 0px" }}>
            {form}
            <Modal isOpen={props.SuccessMsg !== ""}>
                <ModalBody>
                    {props.SuccessMsg}
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success"><Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "500" }}>Return to home page</Link></button>
                </ModalFooter>
            </Modal>
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);