export const selectUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
    state.reviews.find(({ id }) => id === userId);