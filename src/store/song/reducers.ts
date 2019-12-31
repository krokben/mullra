import {
  Song,
  SongState,
  SongActionTypes,
  INIT_SONGS,
  ADD_SONG,
} from "./types";

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
        songs: action.songs,
      };
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, ...[action.song]],
      };
    default:
      return state;
  }
}
