import { combineReducers } from "redux";
import homeReducer from "./pages/Home/reducer";
import appReducer from "./App/reducer";
import profileReducer from "./pages/Profile/reducer";
import bookmarkReducer from "./pages/Bookmark/reducer";
import detailReducer from "./pages/Detail/reducer";
import newJourneyReducer from "./pages/NewJourney/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  appReducer: appReducer,
  profileReducer: profileReducer,
  bookmarkReducer: bookmarkReducer,
  detailReducer: detailReducer,
  newJourneyReducer: newJourneyReducer,
});

export default rootReducer;