import { Router, Response, Request } from "express";

const router = Router();

router.get("/songs", songsHandler);

function songsHandler(req: Request, res: Response) {
  res.sendStatus(200);
}

export { router };
