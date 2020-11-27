export const INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER';
export const DECREMENT_PAGE_NUMBER = 'DECREMENT_PAGE_NUMBER';

export const setPageLoaded = (payload) => ({
    type: "SET_PAGE_LOADED",
    payload,
});

export const incrementPageNumber = () => (dispatch) => {
    dispatch({ type: "SET_PAGE_LOADED", payload: false });
    dispatch(setIncrementPage());
};
export const decrementPageNumber = () => (dispatch) => {
    dispatch({ type: "SET_PAGE_LOADED", payload: false });
    dispatch(setDecrementPage());
};
export const setIncrementPage = () => ({
    type: "INCREMENT_PAGE_NUMBER",
});
export const setDecrementPage = () => ({
    type: "DECREMENT_PAGE_NUMBER",
});
