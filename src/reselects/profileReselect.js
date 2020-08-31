import {createSelector} from "reselect"

const userProfile = state => state.profilePage.userProfile;

export const getUserProfile = createSelector(userProfile, profile => profile);
export const getUserStatus = state => state.profilePage.userStatus;
export const getPostData = state => state.profilePage.postData;