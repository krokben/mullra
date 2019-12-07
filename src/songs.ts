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
    if (store.songs.some(song => song.id === id)) {
      resolve(store.songs.find(song => song.id === id));
      return;
    }
    reject(error => error);
  });
}

export function addSong(store: Store, song: Song): void {
  store.songs.push(song);
}
