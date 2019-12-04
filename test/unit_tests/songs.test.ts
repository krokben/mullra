import { Store } from "../../src/server";
import { Song, getSongs } from "../../src/songs";

test("getSongs_noSongsInDB_emptyList", async () => {
  const stubStore: Store = { songs: [] };
  const songs: Song[] = await getSongs(stubStore);

  expect(songs.length).toBe(0);
});
