import { combineReducers } from "redux";

import ourTeamReducer from "./components/OurTeam/OurTeam.reducers";
import shopCategoriesReducer from "./components/ShopCategories/ShopCatergories.reducer";

export const rootReducer = combineReducers({
  teamMembers: ourTeamReducer,
  shopCategories: shopCategoriesReducer,
});
