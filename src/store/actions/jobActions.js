import { ActionTypes } from "../constants/actionTypes";

export function setJob(jobs) {
    return {
        type: ActionTypes.SET_JOB,
        payload: jobs,
    };
}

export function selectedJob(job) {
    return {
        type: ActionTypes.SELECTED_JOB,
        payload: job,
    };
}