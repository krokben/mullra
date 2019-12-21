import { Store } from "../../src/server";
import { Song, getSongs, getSong, addSong } from "../../src/songs";

test("get songs", async () => {
  const stubStore: Store = { songs: [] };
  const songs: Song[] = await getSongs(stubStore);

  expect(songs.length).toBe(0);
});

test("get song", async () => {
  const exampleSong = { id: 1, title: "first song" };
  const stubStore: Store = { songs: [exampleSong] };
  const song: Song = await getSong(stubStore, 1);
  expect(song).toBe(exampleSong);
});

test("add song", async () => {
  const stubStore: Store = { songs: [] };
  const newSong: Song = { id: 1, title: "first song" };

  await addSong(stubStore, newSong);

  const song: Song = await getSong(stubStore, 1);
  expect(song).toBe(newSong);
});
