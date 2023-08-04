import app, { init } from "@/app";
import { prisma } from "../../src/database/client";
import { duplicatedEmailError, duplicatedUsernameError } from "@/service/user-service/errors";
import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import { createUser } from "../factories";
import { cleanDb } from "../helpers";

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

export const generateValidBodyCreate = () => ({
  email: faker.internet.email(),
  username: faker.lorem.word(),
  password: faker.internet.password(6),
});

describe("POST /users", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await server.post("/users");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post("/users").send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    it("should respond with status 409 when there is an user with given email", async () => {
      const body = generateValidBodyCreate();
      await createUser(body);
      body.username = "newUsername";

      const response = await server.post("/users").send(body);

      expect(response.status).toBe(httpStatus.CONFLICT);
      expect(response.body).toEqual(duplicatedEmailError());
    });

    it("should respond with status 409 when there is an user with given username", async () => {
      const body = generateValidBodyCreate();
      await createUser(body);
      body.email = "new@email.com";

      const response = await server.post("/users").send(body);

      expect(response.status).toBe(httpStatus.CONFLICT);
      expect(response.body).toEqual(duplicatedUsernameError());
    });

    it("should respond with status 201 and create user when given email and username is unique", async () => {
      const body = generateValidBodyCreate();

      const response = await server.post("/users").send(body);

      expect(response.status).toBe(httpStatus.CREATED);
      expect(response.body).toEqual({
        id: expect.any(Number),
        email: body.email,
        username: body.username
      });
    });

    it("should not return user password on body", async () => {
      const body = generateValidBodyCreate();

      const response = await server.post("/users").send(body);

      expect(response.body).not.toHaveProperty("password");
    });

    it("should save user on db", async () => {
      const body = generateValidBodyCreate();

      const response = await server.post("/users").send(body);

      const user = await prisma.user.findUnique({
        where: { email: body.email },
      });
      expect(user).toEqual(
        expect.objectContaining({
          id: response.body.id,
          email: body.email,
          username: body.username
        }),
      );
    });
  });
});
