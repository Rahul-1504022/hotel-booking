import { connect } from "react-redux";
import RoomsCard from "./RoomsCard";
import { useState } from "react";
import RoomDetails from "./RoomDetails";
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import "./RoomsCard.css";
import { selectRoom } from "../../../redux/actionTypes";
import { Link } from "react-router-dom";


const mapStateToProps = state => {
    return {
        Services: state.Services,
        Rooms: state.Rooms,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectRoom: (room) => dispatch(selectRoom(room)),

    }
}

const Rooms = props => {
    const [modalOpen, setModalOpen] = useState(false);

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

    const toogleModal = () => {
        setModalOpen(!modalOpen);
    }

    const roomsCard = props.Rooms.map(room => {
        return (
            <RoomsCard
                key={room.roomId}
                room={room}
                selectedRooms={() => selectedRooms(room)}
            />
        )
    })

    return (
        <div>
            {roomsCard}
            <Modal isOpen={modalOpen}>
                <ModalBody className="modalhover">
                    <h4 style={{ textAlign: "center" }}>Add additional services if needed</h4>
                    {roomServices ? roomServices : <p>Null</p>}
                </ModalBody>
                <ModalFooter>
                    <Button><Link to="/summary">Checkout</Link></Button>
                    <Button onClick={toogleModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Rooms);