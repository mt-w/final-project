import { INCREMENT_PAGE_NUMBER, DECREMENT_PAGE_NUMBER } from "../actions/page";

const initState = {
  page: 1,
  isFirstPage: true,
  isLastPage: false,
  isPageLoaded: true,
};
const getIncPageStatus = (pageNum, lastPage) => {
    pageNum === 846 ? (lastPage = true) : (lastPage = false);
    return lastPage;
}; //846 изменить на вычисляемый относительно all items length параметр

const getDecPageStatus = (pageNum, firstPage) => {
  pageNum < 2 ? (firstPage = true) : (firstPage = false);
  return firstPage;
};

const page = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE_NUMBER:
      const newIncPage = state.page + 1;
      console.log("INC Page" + newIncPage);
      return {
        ...state,
        page: newIncPage,
        isFirstPage: getDecPageStatus(newIncPage),
        isLastPage: getIncPageStatus(newIncPage),
        isPageLoaded: true,
      };

    case DECREMENT_PAGE_NUMBER:
      const newPage = state.page - 1;
      return {
        ...state,
        page: newPage,
          isFirstPage: getDecPageStatus(newPage),
          isLastPage:getIncPageStatus(newPage),
        isPageLoaded: true,
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
