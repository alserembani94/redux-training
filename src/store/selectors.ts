import { createSelector } from 'reselect';

type bugType = {
    id: number,
    description: string,
    resolved: boolean,
    userId?: number,
};

type projectType = {
    id: number,
    name: string,
};

type userType = {
    id: number,
    name: string,
};

export const getUnresolvedBugs = createSelector(
    (state: any) => state.entities.bugs,
    (state: any) => state.entities.projects,
    (bugs: bugType[], projects: projectType[]) => bugs.filter(bug => !bug.resolved),
);

export const getBugsByUser = (userId: number) => createSelector(
    (state: any) => state.entities.bugs,
    (state: any) => state.entities.users,
    (bugs: bugType[], users: userType[]) => bugs.filter(bug => bug.userId === userId),
);