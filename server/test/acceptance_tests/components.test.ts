import * as request from "supertest";
import { app } from "../../server";

describe("GET /components", () => {
  it("SHOULD return 200", done => {
    request(app)
      .get("/components")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

describe("GET /components/:type", () => {
  it("SHOULD return 200", done => {
    request(app)
      .get("/components/carousel")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

describe("POST /components", () => {
  it("SHOULD return 202", done => {
    request(app)
      .post("/components")
      .send({
        component: {
          type: "slider",
          name: "Slider",
          description: "some description",
        },
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).toBe(202);
        done();
      });
  });
});

describe("PUT /components/:type", () => {
  it("SHOULD return 202", done => {
    request(app)
      .put("/components/carousel")
      .send({ description: "new description" })
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).toBe(202);
        done();
      });
  });
});

describe("DELETE /components/:type", () => {
  it("SHOULD return 200", done => {
    request(app)
      .delete("/components/carousel")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});
