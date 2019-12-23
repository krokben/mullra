import { Song, SongState, SongActionTypes, INIT_SONGS } from "./types";

const initialState: SongState = {
  songs: [],
};

export function songReducer(
  state = initialState,
  action: SongActionTypes
): SongState {
  switch (action.type) {
    case INIT_SONGS:
      return {
        ...state,
        songs: [...state.songs, ...action.payload],
      };
    default:
      return state;
  }
}
