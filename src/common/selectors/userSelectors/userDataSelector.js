import { createSelector } from "@reduxjs/toolkit";

export const getUser = state => state.user.user


export const getUserProfileInformation = state => state.userInformation.information

export const getIsMainGenealogist = createSelector(
  getUserProfileInformation,
  (currentUser) => {
    if (currentUser?.isSuperuser && currentUser?.isGenealogist) return currentUser?.isGenealogist
    return currentUser?.isGenealogist
  },
);

export const getIsGenealogist = createSelector(
  getUserProfileInformation,
  (currentUser) => currentUser?.isGenealogist
);

