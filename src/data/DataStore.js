import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer";
import { asyncActions } from "./AsyncMiddleware";

export const ShopDataStore = createStore(ShopReducer, applyMiddleware(asyncActions));
// export const ShopDataStore = createStore(ShopReducer);
