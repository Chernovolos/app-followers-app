import axios from "axios";

const BASE_URL = "https://api.github.com";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json',
        'accept': 'application/vnd.github.v3+json'
    },
});

const getUser = (username) => {
    return instance.get(`/users/${username}`)
}

const getFollowers = (username, currentPage, amount) => {
    const params = {
        page: currentPage - 1,
        per_page: amount,
    }
    console.log("params", params)

    return instance.get(`/users/${username}/followers`, {
        params
    })
};

// const getFollower = (followersName, target_user) => {
//     return instance.get(`/users/${followersName}/following/${target_user}`)
// };

export default {
    getUser,
    getFollowers,
};
