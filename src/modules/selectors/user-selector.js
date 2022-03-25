export const selectUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
    state.users.find(({id}) => id === userId);
