export interface Song {
  title: string;
}

export interface SongState {
  songs: Song[];
}

export const INIT_SONGS = "INIT_SONGS";
export const ADD_SONG = "ADD_SONG";

interface InitSongsAction {
  type: typeof INIT_SONGS;
  songs: Song[];
}

interface AddSongAction {
  type: typeof ADD_SONG;
  song: Song;
}

export type SongActionTypes = InitSongsAction | AddSongAction;
