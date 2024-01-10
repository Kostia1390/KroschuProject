// reducers/index.js
import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import languageReducer from './languageReducer';


const rootReducer = combineReducers({
  weather: weatherReducer,
  language: languageReducer,

});

export default rootReducer;
