import { Router, Response, Request } from "express";
import { getSong } from "./songs";

const router: Router = Router();

function songsHandler(req: Request, res: Response): void {
  res.sendStatus(200);
}

function songHandler(req: Request, res: Response): void {
  getSong({ songs: [{ id: 1, title: "first song" }] }, Number(req.params.id))
    .then(song => {
      res.sendStatus(202).json(song);
    })
    .catch(error => {
      res.status(404).send(error);
    });
}

router.get("/songs", songsHandler);
router.get("/songs/:id", songHandler);

export { router };
