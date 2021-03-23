export const ADD = "ADD";
export const DELETE = "DELETE";
export const TOGGLE = "TOGGLE";

export const addList = (text) => {
    return {
        type: ADD,
        payload: text
    };
};

export const toggle = id => {
    return { type: TOGGLE, payload : id};
};

export const temizle = () => {
    return { type: DELETE};
};