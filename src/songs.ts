import { Store } from "./server";

export interface Song {
  title: string;
}

export function getSongs(store: Store): Song[] {
  return store.songs;
}
