export const INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER';
export const INCREMENT_CAUGHT_PAGE_NUMBER = 'INCREMENT_CAUGHT_PAGE_NUMBER';
export const DECREMENT_PAGE_NUMBER = 'DECREMENT_PAGE_NUMBER';
export const DECREMENT_CAUGHT_PAGE_NUMBER = 'DECREMENT_CAUGHT_PAGE_NUMBER';

export const setPageLoaded = (payload) => ({
    type: "SET_PAGE_LOADED",
    payload,
});

export const incrementPageNumber = () => (dispatch) => {
    dispatch({ type: "SET_PAGE_LOADED", payload: false });
    dispatch(setPage());
};

export const setPage = () => ({
    type: "INCREMENT_PAGE_NUMBER",
});

export const incrementCaughtPageNumber = () => ({
    type: INCREMENT_CAUGHT_PAGE_NUMBER
});
export const decrementPageNumber = () => ({
    type: DECREMENT_PAGE_NUMBER
});

export const decrementCaughtPageNumber = () => ({
    type: DECREMENT_CAUGHT_PAGE_NUMBER
});