import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    jobs: [],
    selectedJob: null,
};

export function jobReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_JOB:
            return { ...state, jobs: action.payload };
        case ActionTypes.SELECTED_JOB:
            return { ...state, selectedJob: action.payload };
        default:
            return state;
    }
}