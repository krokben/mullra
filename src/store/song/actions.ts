import { Song, INIT_SONGS, SongActionTypes } from "./types";

export function initSongs(songs: Song[]): SongActionTypes {
  return {
    type: INIT_SONGS,
    payload: songs,
  };
}
