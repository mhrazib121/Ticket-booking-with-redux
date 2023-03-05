import { combineReducers } from "redux";
import bookingReducer from "./Booking/bookingReducer";

const rootReducer = combineReducers({
    bookings: bookingReducer,
});

export default rootReducer;