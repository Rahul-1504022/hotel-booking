import * as actionTypes from "./actionTypes";
import axios from "axios";

export const selectRoom = (room) => {
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

export const finalSubmit = (data, token) => dispatch => {
    axios.post("https://hotel-booking-461f5-default-rtdb.asia-southeast1.firebasedatabase.app/hotel.json?auth=" + token, data)
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                dispatch(submitSuccess());
            }
        })
        .catch(error => {
            console.log(error);
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