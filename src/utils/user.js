import {v4} from 'uuid';

export const createUser = (name) => {
    if (typeof name !== "string" && !(name instanceof String)) {
        throw new Error("Invalid type of user name");
    }
    name = name.trim()
    if (name === '' ) {
        throw new Error("Empty user name");
    }

    return {
        id : v4(),
        name
    }
}