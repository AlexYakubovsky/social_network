import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "328259c5-68c4-4f02-9ce4-53684a25ddd6"
    }
});

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status}).then(response => response.data)
    }
};

export const friendsAPI = {
    getUsers(usersOnPage, currentPage) {
        return instance.get(`users?count=${usersOnPage}&page=${currentPage}`).then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
};
