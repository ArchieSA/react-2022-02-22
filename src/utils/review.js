import {v4} from "uuid";

export const createReview = (userId, text, rating = 0) => {
    if (typeof text !== "string" && !(text instanceof String)) {
        throw new Error("Invalid type of review text");
    }
    text = text.trim()
    if (text === '' ) {
        throw new Error("Empty text");
    }

    return {
        id : v4(),
        userId,
        text,
        rating
    }
}