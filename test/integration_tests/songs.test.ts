import { Store } from "../../src/server";
import { Song, getSongs, addSong, removeSong } from "../../src/songs";

test("POST song then GET songs STUB", async () => {
  const song = { id: 1, title: "first song" };
  const stubStore: Store = { songs: [] };

  addSong(stubStore, song);

  const songs: Song[] = await getSongs(stubStore);
  expect(songs).toStrictEqual([song]);
});

test("DELETE song then GET songs STUB", () => {
  const stubStore: Store = {
    songs: [
      { id: 1, title: "first song" },
      { id: 2, title: "second song" },
      { id: 3, title: "third song" }
    ]
  };

  removeSong(stubStore, 2)
    .then(async () => {
      const expectedSongs: Song[] = [
        { id: 1, title: "first song" },
        { id: 3, title: "third song" }
      ];

      const songs: Song[] = await getSongs(stubStore);
      expect(songs).toStrictEqual(expectedSongs);
    })
    .catch(console.error);
});
