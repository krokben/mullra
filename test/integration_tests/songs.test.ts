import { Store } from "../../src/server";
import { addSong, getSongs } from "../../src/songs";

test("addSong_noSongInDB_songsWithSong", async () => {
  const song = { id: 1, title: "first song" };
  const stubStore: Store = { songs: [] };

  addSong(stubStore, song);

  const songs = await getSongs(stubStore);
  expect(songs).toStrictEqual([song]);
});
