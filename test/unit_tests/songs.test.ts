import { Song, getSongs } from "../../src/songs";

test("getSongs_noSongsInDB_emptyList", async () => {
  const songs: Song[] = await getSongs();

  expect(songs.length).toBe(0);
});
