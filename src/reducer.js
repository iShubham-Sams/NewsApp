const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoding: true };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isLoding: false,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID != action.payload
        ),
      };
    case "SEARCH_QUERY":
      return { ...state, query: action.payload };
    case "PREV_PAGE":
        let pageNum=state.page-1;
        if(pageNum<=0){
            pageNum=0;
        }
      return { ...state, page: pageNum };
    case "NEXT_PAGE":
        let pageNumInc=state.page+1;
        if(pageNumInc>=state.nbPages){
            pageNumInc=0;
        }
      return { ...state, page: pageNumInc};
  }
  return state;
};

export default reducer;
