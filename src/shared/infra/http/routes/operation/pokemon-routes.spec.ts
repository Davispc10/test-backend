import request from "supertest";
import { Connection, getConnection } from 'typeorm';
import { app } from "../../app";
import createConnection from '@shared/infra/typeorm';

let connection: Connection;
let token;


const testfile = `${__dirname}/../../../../../../Pokemon Go.xlsx`

describe("Pokemon Controller Integration Test", () => {
  beforeAll(async () => {
    connection = await createConnection();
    
  });
  
  afterAll(async () => {
    const myConnection = getConnection();
    await connection.close();
    await myConnection.close();
  });
  
  it("should be able to create a user", async () => {
    const response = await request(app).post("/users").send({
      name: "gabriel_teste",
      email: "teste_gabriel@gmail.com",
      password: "admin"
    });

    expect(response.status === 201 || response.status === 400 ).toBe(true);
  });

  it("should be able to authenticate a user", async () => {
    const response = await request(app).post("/sessions").send({
      email: "teste_gabriel@gmail.com",
      password: "admin",
    });

    token = response.body.token;

    expect(response.body).toHaveProperty("token");
  });
  
  it("should be able to create pokemon", async () => {
    
    jest.setTimeout(30000)
    
    const response = await request(app).post("/pokemons/")
      .set({ Authorization: `Bearer ${token}` })
      .field('Content-Type', 'multipart/form-data')
      .attach('file', testfile, { contentType: 'application/octet-stream' });
    
      expect(response.status).toBe(200);
  
    });
  
  it("should be able to list all pokemons", async () => {
    
    const response = await request(app).post("/pokemons/list")
      .set({ Authorization: `Bearer ${token}` })
      .send({
        search: "",
        rowsPerPage: 200,
        page: 0,
        columnOrder: ["ASC", "ASC"]
      });
    
    expect(response.status).toBe(200);
  });

});