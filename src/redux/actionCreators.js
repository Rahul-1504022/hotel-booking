import * as actionTypes from "./actionTypes";
import axios from "axios";

export const selectRoom = (room) => {
    return {
        type: actionTypes.SELECT_ROOM,
        payload: room,
    }
}

export const loadRooms = (data) => {
    return {
        type: actionTypes.LOAD_ALL_ROOMS,
        payload: data,
    }
}

export const addService = (service) => {
    return {
        type: actionTypes.ADD_SERVICE,
        payload: service,
    }
}

export const refreshAll = () => {
    return {
        type: actionTypes.REFRESH_ALL,
    }
}

export const removeService = (service) => {
    return {
        type: actionTypes.REMOVE_SERVICE,
        payload: service,
    }
}

export const submitSuccess = () => {
    return {
        type: actionTypes.SUBMIT_SUCCESS,
    }
}

export const submitFailed = (message) => {
    return {
        type: actionTypes.SUBMIT_FAILED,
        payload: message,
    }
}

export const finalSubmit = (data, Rooms, token) => dispatch => {
    const updatedRooms = Rooms.map(item => {
        if (item.roomId === data.SelectedRoom.roomId) {
            item.availableRoom = item.availableRoom - 1;
        }
        return item;
    })
    axios.post("https://hotel-booking-461f5-default-rtdb.asia-southeast1.firebasedatabase.app/hotel.json?auth=" + token, data)
        .then(response => {
            if (response.status === 200) {
                dispatch(submitSuccess());
                axios.put("https://hotel-booking-461f5-default-rtdb.asia-southeast1.firebasedatabase.app/Rooms.json?auth=" + token, updatedRooms)
                    .then(response => { })
                    .catch(error => { })
            }
        })
        .catch(error => {
            console.log(error.message);
            dispatch(submitFailed(error.message));
        })
}

export const loadUserHistory = (history) => {
    return {
        type: actionTypes.LOAD_USER_HISTORY,
        payload: history,
    }
}


export const userHistory = (token, userId) => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get("https://hotel-booking-461f5-default-rtdb.asia-southeast1.firebasedatabase.app/hotel.json?auth=" + token + queryParams)
        .then(response => {
            dispatch(loadUserHistory(response.data));
        })
        .catch(error => {
            console.log(error);
        })
}