export interface Song {
  title: string;
}

export interface SongState {
  songs: Song[];
}

export const INIT_SONGS = "INIT_SONGS";

interface InitSongsAction {
  type: typeof INIT_SONGS;
  payload: Song[];
}

export type SongActionTypes = InitSongsAction;
