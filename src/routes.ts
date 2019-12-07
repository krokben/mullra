import { Router, Response, Request } from "express";
import jsonBody = require("body/json");
import store from "./store";
import { getSong, addSong } from "./songs";

const router: Router = Router();

function songsHandler(req: Request, res: Response): void {
  if (req.method === "POST") {
    jsonBody(req, res, song => addSong(store, song));
    res.sendStatus(202);
    return;
  }

  res.sendStatus(200);
}

function songHandler(req: Request, res: Response): void {
  getSong(store, Number(req.params.id))
    .then(song => {
      res.status(200).json(song);
    })
    .catch(error => {
      res.status(404).send(error);
    });
}

router.get("/songs", songsHandler);
router.post("/songs", songsHandler);
router.get("/songs/:id", songHandler);

export { router };
