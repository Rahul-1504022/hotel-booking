import { connect } from "react-redux";
import RoomsCard from "./RoomsCard";
import { useEffect, useState } from "react";
import RoomDetails from "./RoomDetails";
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import "./RoomsCard.css";
import { selectRoom, loadRooms, submitFailed } from "../../../redux/actionCreators";
import { Link } from "react-router-dom";
import axios from "axios";
import data from '../../../data/Rooms';


const mapStateToProps = state => {
    return {
        Services: state.Services,
        Rooms: state.Rooms,
        LoggedIn: state.LoggedIn,
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectRoom: (room) => dispatch(selectRoom(room)),
        loadRooms: (room) => dispatch(loadRooms(room)),

    }
}

const Rooms = props => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        axios.get("https://hotel-booking-461f5-default-rtdb.asia-southeast1.firebasedatabase.app/Rooms.json")
            .then(response => {
                if (response.status === 200) {
                    props.loadRooms(response.data);
                }
            })
            .catch(error => { })
    }, [])

    let roomServices = props.Services.map(item => {
        if (item.price !== 0) {
            return (
                <RoomDetails
                    key={item.serviceId}
                    service={item}
                />

            )
        }

    });


    const selectedRooms = (room) => {
        props.selectRoom(room);
        setModalOpen(!modalOpen);

    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const roomsCard = props.Rooms.map(room => {
        return (
            <RoomsCard
                key={room.roomId}
                room={room}
                selectedRooms={() => selectedRooms(room)}
                LoggedIn={props.LoggedIn}
            />
        )
    })
    document.title = "All Rooms";
    return (
        <div>
            {roomsCard}
            <Modal isOpen={modalOpen}>
                <ModalBody className="modalhover">
                    <h4 style={{ textAlign: "center" }}>Add additional services if needed (Optional)</h4>
                    {roomServices ? roomServices : <p>Null</p>}
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={toggleModal}><Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "500" }}>Clear All and go to Home Page</Link></button>
                    <Button><Link to="/summary" style={{ textDecoration: "none", color: "white", fontWeight: "500" }}>Summary</Link></Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Rooms);