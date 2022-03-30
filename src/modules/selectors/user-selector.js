export const selectUserById = (state, userId) => {
    return state.users.find(({ id }) => id === userId);
}