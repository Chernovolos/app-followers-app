import * as ACTIONS from "../constants/types";

const initialState = {
    user: {},
    preloader: false,
    error: null,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTIONS.USER_START:
            return {
                ...state,
                preloader: true
            };

        case ACTIONS.USER_SUCCESS:
            return {
                ...state,
                user: payload,
                preloader: false
            };

        case ACTIONS.USER_ERROR:
            return {
                ...state,
                error: payload
            };

        case ACTIONS.USER_FINISH:
            return {
                ...state
            };

        default:
            return {
                ...state,
            }
    }
}
