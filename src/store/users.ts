import { createSlice } from '@reduxjs/toolkit';

type userType = {
    id: number,
    name: string,
};

let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users: userType[], action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name,
            });
        },
    },
});

export const {
    userAdded
} = slice.actions;
export default slice.reducer;