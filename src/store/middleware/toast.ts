const toast = (state: any) => (next: any) => (action: any) => {
    if (action.type === 'error') console.log("Toastify", action.payload.message);
    else next(action);
};

export default toast;