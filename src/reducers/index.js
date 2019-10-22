import { combineReducers } from "redux";

const selectedSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;

  return selectedSong;
};

export default combineReducers({ selectedSong });
