export const selectUserById = (state, userId) => {
    return Object.values(state.users.entities)
        .find(({id}) => id === userId);
}

export const selectUsers = (state) =>
    Object.values(state.users.entities);

export const selectIsUsersLoading = (state) =>
    state.users.isLoading;

export const selectIsUsersLoadingFailed = (state) =>
    state.users.isFailed;
