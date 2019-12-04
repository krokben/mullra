import * as express from "express";
import * as morgan from "morgan";
import { router } from "./routes";
import { Song } from "./songs";

interface Store {
  songs: Song[];
}

const app = express();

app.use(morgan("dev"));
app.use(router);

app.listen(3000, () => console.log("[SERVER] is up and running on 3000 ..."));

export { app, Store };
