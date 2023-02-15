import { createState } from "@hookstate/core";

type AppState = {
  isLogged: boolean;
};

const initialState: AppState = {
  isLogged: false,
};

const store = createState(initialState);

export default store;
