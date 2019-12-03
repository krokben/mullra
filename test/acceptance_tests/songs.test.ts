import * as request from "supertest";
import { app } from "../../src/server";

describe("GET /songs", () => {
  it("SHOULD return 200Ok", done => {
    request(app)
      .get("/songs")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});
