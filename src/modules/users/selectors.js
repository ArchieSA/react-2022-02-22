export const selectUserById = (state, userId) => {
    const users = Object.values(state.users.entities);
    return users.find(({ id }) => id === userId);
}