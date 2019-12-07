import { Store } from "./server";

export interface Song {
  id: number;
  title: string;
}

export function getSongs(store: Store): Song[] {
  return store.songs;
}

export function getSong(store: Store, id: number): Promise<Song> {
  return new Promise((resolve, reject) => {
    const song = store.songs.find(song => song.id === id);
    if (song) {
      resolve(song);
      return;
    }
    reject(error => error);
  });
}

export function addSong(store: Store, song: Song): void {
  store.songs.push(song);
}

export function removeSong(store: Store, id: number): Promise<Song[]> {
  return new Promise((resolve, reject) => {
    const songIndex = store.songs.findIndex(song => song.id === id);
    if (songIndex !== undefined) {
      resolve(store.songs.splice(songIndex, 1));
      return;
    }
    reject(error => error);
  });
}
