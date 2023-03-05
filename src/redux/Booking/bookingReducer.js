import { BOOKING, BOOKING_CANCEL } from "./ActionType";

const initialState = {
    allBookings: [
        // {
        //     id: 0,
        //     destinationFrom: "",
        //     destinationTo: "",
        //     journeyDate: "",
        //     guests: "",
        //     class: "",
        // }
    ]
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING:
            return {
                ...state,
                allBookings: [...state.allBookings, action.payload]
            };
        case BOOKING_CANCEL:
            console.log("action id ", action.payload)
            return {
                ...state,
                allBookings: state.allBookings.filter((p) => p.id !== action.payload),

            };
        default:
            return state;
    }
};

export default bookingReducer;