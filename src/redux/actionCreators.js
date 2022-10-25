import * as actionTypes from "./actionTypes";

export const selectRoom = (room) => {
    localStorage.setItem("SelectedRoom", JSON.stringify(room));
    return {
        type: actionTypes.SELECT_ROOM,
        payload: room,
    }
}

export const addService = (service) => {
    return {
        type: actionTypes.ADD_SERVICE,
        payload: service,
    }
}

export const userSubmit = user => {
    return {
        type: actionTypes.USER_FORM_SUBMIT,
        payload: user,
    }
}

export const removeService = (service) => {
    return {
        type: actionTypes.REMOVE_SERVICE,
        payload: service,
    }
}