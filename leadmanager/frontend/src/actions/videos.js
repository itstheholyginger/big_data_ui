import axios from 'axios';

import { DEGREE_DIST_QUERY } from "./types";

// GET_VIDEOS
export const getDegreeDist = () => dispatch => {
    axios.get('/api/videos/')
        .then(res => {
            dispatch({
                type: DEGREE_DIST_QUERY,
                payload: res.data
            });
        })
        .catch((err => console.log(err)));
}