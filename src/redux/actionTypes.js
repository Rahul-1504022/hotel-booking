import * as actionTypes from "./actionCreators";

export const selectRoom = (room) => {
    localStorage.setItem("SelectedRoom", JSON.stringify(room));
    return {
        type: actionTypes.SELECT_ROOM,
        payload: room,
    }
}