import { ADDED, DELETED, ALLCLEARED, COLORSELECTED, ALLCOMPLEDED, TOGGLEED } from "./actionTypes";

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    }
};

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    }
};

export const toggled = (todoId) => {
    return {
        type: TOGGLEED,
        payload: todoId,
    }
};

export const colorselected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {todoId, color},
    }
};

export const allcleard = () => {
    return {
        type: ALLCLEARED,
    }
};

export const allcompleded = () => {
    return {
        type: ALLCOMPLEDED,
    }
};