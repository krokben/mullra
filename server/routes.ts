import { Router, Response, Request } from "express";
import store from "./store";
import {
  getSongs,
  getSong,
  addSong,
  removeSong,
  updateSongTitle,
} from "./songs";

const router: Router = Router();

router.get("/songs", (req: Request, res: Response): void => {
  res.status(200).json(getSongs(store));
});

router.post("/songs", (req: Request, res: Response): void => {
  addSong(store, req.body.song);
  res.sendStatus(202);
});

router.get("/songs/:id", (req: Request, res: Response): void => {
  getSong(store, Number(req.params.id))
    .then(song => res.status(200).json(song))
    .catch(error => res.status(404).send(error));
});

router.put("/songs/:id", (req: Request, res: Response): void => {
  updateSongTitle(store, Number(req.params.id), req.body.title)
    .then(() => res.sendStatus(202))
    .catch(error => res.status(404).send(error));
});

router.delete("/songs/:id", (req: Request, res: Response): void => {
  removeSong(store, Number(req.params.id))
    .then(() => res.sendStatus(200))
    .catch(error => res.status(404).send(error));
});

export { router };
