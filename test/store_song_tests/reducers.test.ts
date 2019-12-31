import { songReducer } from "../../src/store/song/reducers";
import { ADD_SONG, INIT_SONGS } from "../../src/store/song/types";

describe("song reducer", () => {
  it("should handle INIT_SONGS", () => {
    expect(
      songReducer(
        { songs: [{ title: "song1" }] },
        {
          type: INIT_SONGS,
          songs: [{ title: "song2" }],
        }
      )
    ).toEqual({
      songs: [{ title: "song2" }],
    });
  });

  it("should handle ADD_SONG", () => {
    expect(
      songReducer(
        { songs: [{ title: "song1" }] },
        {
          type: ADD_SONG,
          song: { title: "song2" },
        }
      )
    ).toEqual({ songs: [{ title: "song1" }, { title: "song2" }] });
  });
});
