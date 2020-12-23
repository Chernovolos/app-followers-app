import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";

export const followersStart = () => ({type: ACTIONS.FOLLOWERS_LIST_START});
export const followersSuccess = (followers) => ({type: ACTIONS.FOLLOWERS_LIST_SUCCESS, payload: followers});
export const followersError = (error) => ({type: ACTIONS.FOLLOWERS_LIST_ERROR, payload: error});
export const followersFinish = () => ({type: ACTIONS.FOLLOWERS_LIST_FINISH});

// export const changeUsername = (username) => ({type: ACTIONS.CHANGE_USERNAME, payload: username});
// export const changeCurrentPage = (currentPage) => ({type: ACTIONS.CHANGE_CURRENT_PAGE, payload: currentPage});
// export const changeAmount = (amount) => ({type: ACTIONS.CHANGE_AMOUNT, payload: amount});
export const tableChangePage = (pagination) => ({type: ACTIONS.TABLE_CHANGE_PAGE, payload: pagination});


export const getFollowersList = () => (dispatch, getState) => {
    const { followersPage } = getState();
    const { username, currentPage, amount } = followersPage;

    dispatch(followersStart());
    serviceAPI.getFollowers(username, currentPage, amount)
        .then(({data}) => {
            const followers = data;
            dispatch(followersSuccess(followers));
        })
        .catch((error) => {
            dispatch(followersError(error));
        })
        .finally(() => {
            dispatch(followersFinish());
        })
};


