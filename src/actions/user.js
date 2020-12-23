import * as ACTIONS from "../constants/types";
import serviceAPI from "../services/api";

export const userStart = () => ({type: ACTIONS.USER_START});
export const userSuccess = (user) => ({type: ACTIONS.USER_SUCCESS, payload: user});
export const userError = (error) => ({type: ACTIONS.USER_ERROR, payload: error});
export const userFinish = () => ({type: ACTIONS.USER_FINISH});

export const getUserProfile = () => (dispatch, getState) => {
    const { followersPage } = getState();
    const { username } = followersPage;

    dispatch(userStart());
    serviceAPI.getUser(username)
       .then(({data}) => {
           let user = data;
           dispatch(userSuccess(user));
       })
        .catch((error) => {
            dispatch(userError(error));
        })
        .finally(() => {
            dispatch(userFinish());
        })
};
