import app, { init } from "@/app";
import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import { prisma } from "../../src/database/client";
import { createUser } from "../factories";
import { generateValidBodyCreate } from "./users.test";
import { cleanDb, generateValidToken } from "../helpers";

beforeAll(async () => {
  await init();
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("POST /auth/sign-in", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await server.post("/auth/sign-in");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post("/auth/sign-in").send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    const generateValidBody = () => ({
      email: faker.internet.email(),
      password: faker.internet.password(6),
    });

    it("should respond with status 401 if there is no user for given email", async () => {
      const body = generateValidBody();

      const response = await server.post("/auth/sign-in").send(body);

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if there is a user for given email but password is not correct", async () => {
      const body = generateValidBodyCreate();
      await createUser(body);

      const response = await server.post("/auth/sign-in").send({
        ...body,
        password: faker.lorem.word(),
      });

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe("when credentials are valid", () => {
      it("should respond with status 200", async () => {
        const userBody = generateValidBodyCreate();
        await createUser(userBody);
        const body = {
          email: userBody.email,
          password: userBody.password
        };
        
        const response = await server.post("/auth/sign-in").send(body);

        expect(response.status).toBe(httpStatus.OK);
      });

      it("should respond with user data", async () => {
        const userBody = generateValidBodyCreate();
        const user = await createUser(userBody);
        const body = {
          email: userBody.email,
          password: userBody.password
        };

        const response = await server.post("/auth/sign-in").send(body);

        expect(response.body.user).toEqual(
          expect.objectContaining({
            id: user.id,
            email: user.email,
          }));
      });

      it("should respond with session token", async () => {
        const userBody = generateValidBodyCreate();
        await createUser(userBody);
        const body = {
          email: userBody.email,
          password: userBody.password
        };

        const response = await server.post("/auth/sign-in").send(body);

        expect(response.body.token).toBeDefined();
      });
    });
  });
});

describe("DELETE /auth/log-out", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.delete("/auth/log-out");
        
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
        
  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();
    const response = await server.delete("/auth/log-out").set("Authorization", `Bearer ${token}`);
        
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe("when token is valid", () => {
    it("should respond with status 200 when session is deleted", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);

      const response = await server.delete("/auth/log-out").set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.OK);
    });

    it("should delete session from db", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);

      await server.delete("/auth/log-out").set("Authorization", `Bearer ${token}`);

      const session = await prisma.session.findFirst({ where: {
        userId: user.id,
        token
      }
      });

      expect(session).toEqual(null);
    });
  });
});
