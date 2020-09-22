const logger = (param: any) => (store: any) => (next: any) => (action: any) => {
    // console.log("Logging", param);

    // Kind of auth channel
    next(action);
};

export default logger;