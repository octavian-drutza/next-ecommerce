export function globalReducer (state, action) {
    const {
        type,
        payload
    } = action;

    switch(type) {
        default:
            throw new Error(`Unhandled action type ${type}`);
    }
}