import * as request from "supertest";
import { app } from "../../server";

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
      .send({ song: { id: 2, title: "some title" } })
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).toBe(202);
        done();
      });
  });
});

describe("PUT /songs/:id", () => {
  it("SHOULD return 202", done => {
    request(app)
      .put("/songs/1")
      .send({ title: "new title" })
      .set("Accept", "application/json")
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
