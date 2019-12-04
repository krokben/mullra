import { Router, Response, Request } from "express";

const router: Router = Router();

function songsHandler(req: Request, res: Response): void {
  res.sendStatus(200);
}

router.get("/songs", songsHandler);

export { router };
