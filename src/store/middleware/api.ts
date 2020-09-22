import axios from 'axios';
import * as actions from '../api';

// const action = {
//     type: 'apiCallBegan',
//     payload: {
//         url: '/bugs',
//         method: 'get',
//         data: {},
//         onSuccess: 'bugsReceived',
//         onError: 'apiRequestFailed',
//     }
// }

const api = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    onStart && dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: 'http://localhost:9001/api',
            url,
            method,
            data,
        });

        // General
        dispatch(actions.apiCallSuccess(response.data));

        onSuccess && dispatch({ type: onSuccess, payload: response.data });
    } catch(error) {
        // dispatch({ type: onError, payload: error });
        dispatch(actions.apiCallFailed(error.message));

        onError && dispatch({ type: onError, payload: error.message });
    }
};

export default api;