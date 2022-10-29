import * as actionTypes from "./actionTypes";
import Services from "../data/Services";
// import Rooms from "../data/Rooms";

const INITIAL_STATE = {
    Services: Services,
    Rooms: [],
    SelectedRoom: {},
    Price: 0,
    AddServices: [],
    User: {},
    SuccessMsg: "",
    LoggedIn: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    userId: localStorage.getItem("userId") ? localStorage.getItem("userId") : null,
    userHistory: [],
}

export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SELECT_ROOM:
            return {
                ...state,
                SelectedRoom: action.payload,
                Price: state.Price + action.payload.price,
            }

        case actionTypes.LOAD_ALL_ROOMS:
            // const loadRooms = [];
            // for (let key in action.payload) {
            //     loadRooms.push(
            //         ...action.payload[key],
            //     )
            // }
            return {
                ...state,
                Rooms: action.payload,
            }

        case actionTypes.ADD_SERVICE:
            return {
                ...state,
                Price: state.Price + action.payload.price,
                AddServices: state.AddServices.concat(action.payload),
            }

        case actionTypes.REMOVE_SERVICE:
            const newServiceList = state.AddServices.filter((item) => {
                return item.name !== action.payload.name;
            })
            return {
                ...state,
                Price: state.Price - action.payload.price,
                AddServices: newServiceList,
            }


        case actionTypes.SUBMIT_SUCCESS:
            return {
                ...state,
                SelectedRoom: {},
                Price: 0,
                AddServices: [],
                User: {},
                SuccessMsg: "Successfully Submitted!!!",
            }


        case actionTypes.SUBMIT_FAILED:
            console.log(action.payload)
            return {
                ...state,
                SelectedRoom: {},
                Price: 0,
                AddServices: [],
                User: {},
                SuccessMsg: action.payload,
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

        case actionTypes.REFRESH_ALL:
            return {
                ...state,
                SelectedRoom: {},
                Price: 0,
                AddServices: [],
                User: {},
                SuccessMsg: "",
            }

        case actionTypes.LOAD_USER_HISTORY:
            const history = [];
            for (let key in action.payload) {
                history.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                userHistory: history,
            }

        default:
            return state;
    }
}