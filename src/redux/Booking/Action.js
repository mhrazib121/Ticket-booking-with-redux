import { BOOKING, BOOKING_CANCEL } from "./ActionType";

export const bookingTicket = (value) => {
    return {
        type: BOOKING,
        payload: value,
    }
};
export const bookingCancel = (value) => {
    return {
        type: BOOKING_CANCEL,
        payload: value,
    }
};