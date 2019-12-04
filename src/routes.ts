import { Router, Response, Request } from "express";
import store from "./store";
import { getSong } from "./songs";

const router: Router = Router();

function songsHandler(req: Request, res: Response): void {
  res.sendStatus(200);
}

function songHandler(req: Request, res: Response): void {
  getSong(store, Number(req.params.id))
    .then(song => {
      res.status(202).json(song);
    })
    .catch(error => {
      res.status(404).send(error);
    });
}

router.get("/songs", songsHandler);
router.get("/songs/:id", songHandler);

export { router };
