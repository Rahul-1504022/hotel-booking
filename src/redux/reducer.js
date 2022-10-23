import * as actionTypes from "./actionCreators";
import Services from "../data/Services";
import Rooms from "../data/Rooms";
const INITIAL_STATE = {
    Services: Services,
    Rooms: Rooms,
    SelectedRoom: localStorage.getItem("SelectedRoom") ? JSON.parse(localStorage.getItem("SelectedRoom")) : {},
    Price: null,
}

export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SELECT_ROOM:
            return {
                ...state,
                SelectedRoom: action.payload,
                Price: action.payload.price,
            }

        default:
            return state;
    }
}