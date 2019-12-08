import { Router, Response, Request } from "express";
import jsonBody = require("body/json");
import store from "./store";
import { getSong, addSong, removeSong, updateSongTitle } from "./songs";

const router: Router = Router();

function songsHandler(req: Request, res: Response): void {
  if (req.method === "POST") {
    addSong(store, req.body.song);
    res.sendStatus(202);
    return;
  }

  res.sendStatus(200);
}

function songHandler(req: Request, res: Response): void {
  if (req.method === "DELETE") {
    removeSong(store, Number(req.params.id))
      .then(() => res.sendStatus(200))
      .catch(error => res.status(404).send(error));
    return;
  }

  if (req.method === "PUT") {
    updateSongTitle(store, Number(req.params.id), req.body.title)
      .then(() => res.sendStatus(202))
      .catch(error => res.status(404).send(error));
    return;
  }

  getSong(store, Number(req.params.id))
    .then(song => res.status(200).json(song))
    .catch(error => res.status(404).send(error));
}

router.get("/songs", songsHandler);
router.post("/songs", songsHandler);
router.get("/songs/:id", songHandler);
router.put("/songs/:id", songHandler);
router.delete("/songs/:id", songHandler);

export { router };
