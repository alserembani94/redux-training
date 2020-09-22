import { createSlice } from '@reduxjs/toolkit';

type projectType = {
    id: number,
    name: string,
};

let lastId = 0;

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (projects: projectType[], action) => {
            projects.push({
                id: ++lastId,
                name: action.payload.name,
            });
        },
        projectNameUpdated: (projects: projectType[], action) => {
            const index = projects.findIndex(project => project.id === action.payload.id);
            projects[index].name = action.payload.name;
        },
    },
});

export const {
    projectAdded,
    projectNameUpdated
} = slice.actions;
export default slice.reducer;