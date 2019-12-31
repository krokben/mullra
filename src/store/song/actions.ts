import { Song, INIT_SONGS, ADD_SONG, SongActionTypes } from "./types";

export function initSongs(songs: Song[]): SongActionTypes {
  return {
    type: INIT_SONGS,
    songs,
  };
}

export function addSong(song: Song): SongActionTypes {
  return {
    type: ADD_SONG,
    song,
  };
}
