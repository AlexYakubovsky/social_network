import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "71e5da94-7843-4823-b8ed-9a2fc4fe9a74"
    }
});

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
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
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
};
