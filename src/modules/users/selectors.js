import { selectRestaurantById } from "../restaurants/selectors";
import { createSelector } from 'reselect';

export const selectUsers = (state) => state.users.entities;

export const selectUserById = (state, userId) =>
    state.users.entities[userId] || null;

export const selectIsUsersLoading = (state) => state.users.isLoading;
export const selectIsUsersFailed = (state) => state.users.isFailed;