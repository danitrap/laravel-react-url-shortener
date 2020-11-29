import { useReducer } from "react";
import { validateUrl } from "../utils/validateUrl";

const initialState = {
    url: "",
    isValid: false,
    error: "",
    isLoading: false
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "typing":
            return {
                ...state,
                url: action.payload,
                isValid: validateUrl(action.payload),
                error: "",
                isLoading: false
            };

        case "post":
            return {
                ...state,
                isLoading: true
            };

        case "error":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            throw Error();
    }
};

export default function useForm() {
    return useReducer(formReducer, initialState);
}
