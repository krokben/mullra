import { Router, Response, Request } from "express";
import inMemoryStore from "./in-memory-store";
import { queryDB } from "./db";
import {
  getSongs,
  getSong,
  addSong,
  removeSong,
  updateSongTitle,
} from "./songs";

const router: Router = Router();

router.get("/songs", (req: Request, res: Response): void => {
  queryDB("SELECT * FROM songs", [])
    .then(songs => res.status(200).json(getSongs({ songs: songs.rows })))
    .catch(error => {
      console.error(error);
      res.status(500);
    });
});

router.post("/songs", (req: Request, res: Response): void => {
  addSong(inMemoryStore, req.body.song);
  res.sendStatus(202);
});

router.get("/songs/:id", (req: Request, res: Response): void => {
  getSong(inMemoryStore, Number(req.params.id))
    .then(song => res.status(200).json(song))
    .catch(error => res.status(404).send(error));
});

router.put("/songs/:id", (req: Request, res: Response): void => {
  updateSongTitle(inMemoryStore, Number(req.params.id), req.body.title)
    .then(() => res.sendStatus(202))
    .catch(error => res.status(404).send(error));
});

router.delete("/songs/:id", (req: Request, res: Response): void => {
  removeSong(inMemoryStore, Number(req.params.id))
    .then(() => res.sendStatus(200))
    .catch(error => res.status(404).send(error));
});

export { router };
