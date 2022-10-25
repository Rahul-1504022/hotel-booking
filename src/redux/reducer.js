import * as actionTypes from "./actionTypes";
import Services from "../data/Services";
import Rooms from "../data/Rooms";
const INITIAL_STATE = {
    Services: Services,
    Rooms: Rooms,
    SelectedRoom: {},
    Price: 0,
    AddServices: [],
    User: {},
    SuccessMsg: "",
    LoggedIn: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    userId: localStorage.getItem("userId") ? localStorage.getItem("userId") : null,
}

export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SELECT_ROOM:
            return {
                ...state,
                SelectedRoom: action.payload,
                Price: state.Price + action.payload.price,
            }

        case actionTypes.ADD_SERVICE:
            return {
                ...state,
                Price: state.Price + action.payload.price,
                AddServices: state.AddServices.concat(action.payload),
            }

        case actionTypes.REMOVE_SERVICE:
            const newServiceList = state.AddServices.filter((item, index) => {
                return item.name !== action.payload.name;
            })
            return {
                ...state,
                AddServices: newServiceList,
            }

        case actionTypes.USER_FORM_SUBMIT:
            return {
                ...state,
                User: action.payload,
                SuccessMsg: "Successfully Submitted",
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                LoggedIn: true,
            }

        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                SelectedRoom: {},
                Price: 0,
                AddServices: [],
                User: {},
                SuccessMsg: "",
            };

        default:
            return state;
    }
}