import * as ACTIONS from "../constants/types";

const initialState = {
    followers: [],
    amount: 6,
    currentPage: 1,
    username: "mosh-hamedani",
    preloader: false,
    error: null,
    total: 0
};

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ACTIONS.FOLLOWERS_LIST_START:
            return {
                ...state,
                preloader: true
            };

        case ACTIONS.FOLLOWERS_LIST_SUCCESS:
            return {
                ...state,
                preloader: false,
                followers: payload,
                error: null
            };

        case ACTIONS.FOLLOWERS_LIST_ERROR:
            return {
                ...state,
                error: payload,
                preloader: false
            }

        case ACTIONS.FOLLOWERS_LIST_FINISH: {
            return {
                ...state,
            }
        }

        // set total followers from user request
        case ACTIONS.USER_SUCCESS: {
            console.log(payload.followers);
            return {
                ...state,
                total: payload.followers,
            }
        }

        default:
            return {
                ...state,
            }
    }
}
