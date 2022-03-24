export const loggerMiddleware = store => next => action => {
    console.log(action);

    next(action);
}