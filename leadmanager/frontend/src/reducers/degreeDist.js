import {DEGREE_DIST_QUERY} from "../actions/types";

const initialState = {
    degree: "",
    qualifier: "",
    query: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DEGREE_DIST_QUERY:
            return {
                ...state,
                degreeDist: action.payload
            };
        default:
            return state;
    }
}