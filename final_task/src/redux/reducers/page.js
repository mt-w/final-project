import {
  INCREMENT_PAGE_NUMBER,
  INCREMENT_CAUGHT_PAGE_NUMBER,
  DECREMENT_PAGE_NUMBER,
  DECREMENT_CAUGHT_PAGE_NUMBER,
} from "../actions/page";

const initState = {
  page: 1,
  caughtPage: 1,
  isFirstPage: false,
  isLastPage: false,
  isPageLoaded: true
};

 const page = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE_NUMBER:
      return {
        ...state,
        page: state.page + 1,
        isPageLoaded: true
      };
    case INCREMENT_CAUGHT_PAGE_NUMBER:
      return {
        ...state,
        caughtPage: state.caughtPage + 1,
          isPageLoaded: true
      };

    case DECREMENT_PAGE_NUMBER:
      return {
        ...state,
        page: state.page - 1,
          isPageLoaded: true
      };
    case DECREMENT_CAUGHT_PAGE_NUMBER:
      return {
        ...state,
        caughtPage: state.caughtPage - 1,
          isPageLoaded: true
      };
    case "SET_PAGE_LOADED":
      return {
        ...state,
        isPageLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default page;
