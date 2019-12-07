import * as request from "supertest";
import { app } from "../../src/server";

describe("GET /songs", () => {
  it("SHOULD return 200", done => {
    request(app)
      .get("/songs")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

describe("GET /songs/:id", () => {
  it("SHOULD return 200", done => {
    request(app)
      .get("/songs/1")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

describe("POST /songs", () => {
  it("SHOULD return 202", done => {
    request(app)
      .post("/songs")
      .end((err, res) => {
        expect(res.status).toBe(202);
        done();
      });
  });
});

describe("DELETE /songs/:id", () => {
  it("SHOULD return 200", done => {
    request(app)
      .delete("/songs/1")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});
