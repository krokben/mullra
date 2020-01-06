import { Router, Response, Request } from "express";
import inMemoryStore from "./in-memory-store";
import {
  getComponents,
  getComponent,
  addComponent,
  updateComponentDescription,
  removeComponent,
} from "./components";

const router: Router = Router();

router.get("/components", (req: Request, res: Response): void => {
  res.status(200).json(getComponents(inMemoryStore));
});

router.post("/components", (req: Request, res: Response): void => {
  addComponent(inMemoryStore, req.body.component);
  res.sendStatus(202);
});

router.get("/components/:type", (req: Request, res: Response): void => {
  getComponent(inMemoryStore, req.params.type)
    .then(component => res.status(200).json(component))
    .catch(error => res.status(404).send(error));
});

router.put("/components/:type", (req: Request, res: Response): void => {
  updateComponentDescription(
    inMemoryStore,
    req.params.type,
    req.body.description
  )
    .then(() => res.sendStatus(202))
    .catch(error => res.status(404).send(error));
});

router.delete("/components/:type", (req: Request, res: Response): void => {
  removeComponent(inMemoryStore, req.params.type)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(404).send(error));
});

export { router };
