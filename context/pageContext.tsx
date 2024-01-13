import { ReactNode, createContext, useContext, useReducer } from "react";

interface PageState {
  OpenAlert: boolean;
  AlertData: any;
}

const initialState: PageState = {
  OpenAlert: false,
  AlertData: {
    vertical: "top",
    horizontal: "right",
    message: "",
    severity: "success",
  },
};

const actionTypes = {
  showAlert: "showAlert",
  hideAlert: "hideAlert",
};

// action creators
const showAlert = (item: any) => ({
  type: actionTypes.showAlert,
  payload: {
    item,
  },
});
const hideAlert = () => ({ type: actionTypes.hideAlert });

const PageContext = createContext<{ state: PageState; dispatch: any }>({
  state: initialState,
  dispatch: () => {},
});

const pageReducer = (state: PageState, action: any): PageState => {
  switch (action.type) {
    case actionTypes.showAlert:
      return {
        ...state,
        OpenAlert: true,
        AlertData: action.payload.item,
      };

    case actionTypes.hideAlert:
      return { ...state, OpenAlert: false };

    default:
      return state;
  }
};

const PageContextProvider = ({ children }: { children: ReactNode }) => {
  // you can add init function as third arg to useReducer
  const [state, dispatch] = useReducer(pageReducer, initialState);

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

const usePageContext = () => useContext(PageContext);

export { PageContextProvider, usePageContext, showAlert, hideAlert };
