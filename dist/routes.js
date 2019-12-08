"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonBody = require("body/json");
const store_1 = require("./store");
const songs_1 = require("./songs");
const router = express_1.Router();
exports.router = router;
function songsHandler(req, res) {
    if (req.method === "POST") {
        jsonBody(req, res, song => songs_1.addSong(store_1.default, song));
        res.sendStatus(202);
        return;
    }
    res.sendStatus(200);
}
function songHandler(req, res) {
    if (req.method === "DELETE") {
        songs_1.removeSong(store_1.default, Number(req.params.id))
            .then(() => res.sendStatus(200))
            .catch(error => res.status(404).send(error));
        return;
    }
    if (req.method === "PUT") {
        throw new Error("put");
        res.sendStatus(202);
        return;
        // updateSong(store, Number(req.params.id))
        //   .then(() => res.sendStatus(202))
        //   .catch(error => res.status(404).send(error));
        // return;
    }
    songs_1.getSong(store_1.default, Number(req.params.id))
        .then(song => res.status(200).json(song))
        .catch(error => res.status(404).send(error));
}
router.get("/songs", songsHandler);
router.post("/songs", songsHandler);
router.get("/songs/:id", songHandler);
router.delete("/songs/:id", songHandler);
//# sourceMappingURL=routes.js.map