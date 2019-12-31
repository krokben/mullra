import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { INIT_SONGS } from "./store/song/types";

export default function App() {
  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: INIT_SONGS,
      songs: [...songs, ...[{ title: "song1" }, { title: "song2" }]],
    });
  }, []);

  return (
    <main>
      <h1 className="mullra__header">My Songs</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={`song-${index}`}>{song.title}</li>
        ))}
      </ul>
    </main>
  );
}
