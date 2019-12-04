import { Store } from "../../src/server";
import { Song, getSongs, getSong } from "../../src/songs";

test("getSongs_noSongsInDB_emptyList", async () => {
  const stubStore: Store = { songs: [] };
  const songs: Song[] = await getSongs(stubStore);

  expect(songs.length).toBe(0);
});

test("getSong_songInDB_song", async () => {
  const exampleSong = { id: 1, title: "first song" };
  const stubStore: Store = { songs: [exampleSong] };
  const song: Song = await getSong(stubStore, 1);
  expect(song).toBe(exampleSong);
});
