const func = ({ dispatch, getState }: { dispatch: any, getState: any }) => (next: any) => (action: any) => {
    if (typeof action === 'function') action(dispatch, getState);
    else next(action);
}

export default func;