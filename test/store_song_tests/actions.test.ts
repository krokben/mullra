import { addSong, initSongs } from "../../src/store/song/actions";
import {
  ADD_SONG,
  INIT_SONGS,
  Song,
  SongActionTypes,
} from "../../src/store/song/types";

describe("actions", () => {
  it("should create an action to init songs", () => {
    const songs: Song[] = [{ title: "song1" }, { title: "song2" }];
    const expectedAction: SongActionTypes = {
      type: INIT_SONGS,
      songs,
    };
    expect(initSongs(songs)).toEqual(expectedAction);
  });

  it("should create an action to add song", () => {
    const song: Song = { title: "song1" };
    const expectedAction: SongActionTypes = {
      type: ADD_SONG,
      song,
    };
    expect(addSong(song)).toEqual(expectedAction);
  });
});
