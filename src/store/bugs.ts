import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import moment from 'moment';

const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        bugAdded: (bugs: any, action: any) => {
            bugs.list.push(action.payload);
        },
        bugAssignedToUser: (bugs: any, action: any) => {
            const { id: bugId, userId } = action.payload;
            const index = bugs.list.findIndex((bug: any) => bug.id === bugId);
            bugs.list[index].userId = userId;
        },
        bugResolved: (bugs: any, action: any) => {
            const index = bugs.list.findIndex((bug: any) => bug.id === action.payload.id);
            bugs.list[index].resolved = true;
        },
        bugsReceived: (bugs: any, action: any) => {
            bugs.list = action.payload;
            bugs.loading = false;
            bugs.lastFetch = Date.now();
        },
        bugsRequested: (bugs: any, action: any) => {
            bugs.loading = true;
        },
        bugsRequestFailed: (bugs: any, action: any) => {
            bugs.loading = false;
        },
    }
});

const {
    bugAdded,
    bugResolved,
    bugAssignedToUser,
    bugsReceived,
    bugsRequested,
    bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bugs";

export const loadBugs = () => (dispatch: any, getState: any) => {
    const { lastFetch } = getState().entities.bugs;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

    if (diffInMinutes < 10) return;

    dispatch(apiCallBegan({
        url,
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onError: bugsRequestFailed.type,
    }));
};

export const addBug = (bug: any) => apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
});

export const resolveBug = (id: number) => apiCallBegan({
    url: url + '/' + id,
    method: 'patch',
    data: { resolved: true },
    onSuccess: bugResolved.type,
});

export const assignBugToUser = (bugId: number, userId: number) => apiCallBegan({
    url: url + '/' + bugId,
    method: 'patch',
    data: { userId },
    onSuccess: bugAssignedToUser.type,
});


// export const loadBugs = () => apiCallBegan({
//     url,
//     onStart: bugsRequested.type,
//     onSuccess: bugsReceived.type,
//     onError: bugsRequestFailed.type,
// });