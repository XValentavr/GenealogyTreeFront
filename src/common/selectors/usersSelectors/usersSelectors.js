import { createSelector } from "@reduxjs/toolkit";

export const getUsers = state => {
  return state.users.users
}


export const getUsersIsGenealogist = createSelector(
  getUsers,
  (users) => {
    if (users) return users.filter(user => user.isGenealogist)
  }
);

