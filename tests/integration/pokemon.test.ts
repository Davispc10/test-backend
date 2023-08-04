import app, { init } from "@/app";
import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import * as jwt from "jsonwebtoken";
import { createUser, createPokemon } from "../factories";
import { cleanDb, generateValidToken } from "../helpers";

beforeAll(async () => {
  await init();
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

export const generateValidPokemonBody = () => ({
  name: faker.lorem.word(),
  statTotal: faker.datatype.number({ max: 999 }),
  pokedexNumber: faker.datatype.number({ min: 1, max: 801 }),
});

async function generate3Pokemons() {
  const body1 = generateValidPokemonBody();
  const body2 = generateValidPokemonBody();
  const body3 = generateValidPokemonBody();

  const pokemon1 = await createPokemon(body1);
  const pokemon2 = await createPokemon(body2);
  const pokemon3 = await createPokemon(body3);
  return({
    pokemon1,
    pokemon2,
    pokemon3,
  });
}

describe("GET /pokemon", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/pokemon");
      
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
      
  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();
    const response = await server.get("/pokemon").set("Authorization", `Bearer ${token}`);
      
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe("when token is valid", () => {
    it("should respond with status 200 and pokemons data", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const {
        pokemon1,
        pokemon2,
        pokemon3,
      } = await generate3Pokemons();
    
      const response = await server.get("/pokemon").set("Authorization", `Bearer ${token}`);
    
      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toHaveLength(3);
      expect(response.body).toContainEqual(pokemon1);
      expect(response.body).toContainEqual(pokemon2);
      expect(response.body).toContainEqual(pokemon3);
    });
    describe("when query filters are used", () => {
      it("should respond with status 200 and pokemons data if querys are correct", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
        const dragon1 = await createPokemon({ type1: "dragon", pokedexNumber: 4 });
        const dragon2 = await createPokemon({ type2: "dragon", pokedexNumber: 3 });
        const dragon3 = await createPokemon({ type2: "dragon", pokedexNumber: 2 });
        const dragon4 = await createPokemon({ type1: "dragon", pokedexNumber: 1 });
        await generate3Pokemons();
          
        const responsePage1 = await server.get("/pokemon?direction=desc&page=0&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
        const responsePage2 = await server.get("/pokemon?direction=desc&page=1&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
          
        expect(responsePage1.status).toBe(httpStatus.OK);
        expect(responsePage2.status).toBe(httpStatus.OK);
        expect(responsePage1.body).toHaveLength(2);
        expect(responsePage2.body).toHaveLength(2);
        expect(responsePage1.body).toContainEqual(dragon1);
        expect(responsePage1.body).toContainEqual(dragon2);
        expect(responsePage2.body).toContainEqual(dragon3);
        expect(responsePage2.body).toContainEqual(dragon4);
      });

      it("should use direction as 'asc' if value is invalid", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
        const dragon1 = await createPokemon({ type1: "dragon", pokedexNumber: 1 });
        const dragon2 = await createPokemon({ type2: "dragon", pokedexNumber: 2 });
        const dragon3 = await createPokemon({ type2: "dragon", pokedexNumber: 3 });
        const dragon4 = await createPokemon({ type1: "dragon", pokedexNumber: 4 });
        await generate3Pokemons();
          
        const responsePage1 = await server.get("/pokemon?direction=invalid&page=0&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
        const responsePage2 = await server.get("/pokemon?direction=invalid&page=1&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
          
        expect(responsePage1.status).toBe(httpStatus.OK);
        expect(responsePage2.status).toBe(httpStatus.OK);
        expect(responsePage1.body).toHaveLength(2);
        expect(responsePage2.body).toHaveLength(2);
        expect(responsePage1.body).toContainEqual(dragon1);
        expect(responsePage1.body).toContainEqual(dragon2);
        expect(responsePage2.body).toContainEqual(dragon3);
        expect(responsePage2.body).toContainEqual(dragon4);
      });

      it("should respond with status 200 and an empty array if given type doesnt exist", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
        await generate3Pokemons();
            
        const responsePage1 = await server.get("/pokemon?direction=asc&page=0&pageSize=2&type=notExisitng").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.OK);
        expect(responsePage1.body).toEqual([]);
      });

      it("should respond with status 400 if paging values are incorrect", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
            
        const responsePage1 = await server.get("/pokemon?direction=asc&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.BAD_REQUEST);
      });

      it("should respond with status 400 if paging values are incorrect", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
            
        const responsePage1 = await server.get("/pokemon?direction=asc&page=0&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.BAD_REQUEST);
      });

      it("should respond with status 400 if paging values are incorrect", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
            
        const responsePage1 = await server.get("/pokemon?direction=asc&page=-1&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.BAD_REQUEST);
      });
    });
  });
});

describe("GET /pokemon/sortBy/:sorter", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/pokemon/sortBy/atk");
        
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
        
  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();
    const response = await server.get("/pokemon/sortBy/atk").set("Authorization", `Bearer ${token}`);
        
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  
  describe("when token is valid", () => {
    it("should respond with status 200 and pokemons data", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const pokemon1 = await createPokemon({ atk: 100 });
      const pokemon2 = await createPokemon({ atk: 200 });
      const pokemon3 = await createPokemon({ atk: 300 });
      
      const response = await server.get("/pokemon/sortBy/atk").set("Authorization", `Bearer ${token}`);
      
      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toHaveLength(3);
      expect(response.body[2]).toEqual(pokemon1);
      expect(response.body[1]).toEqual(pokemon2);
      expect(response.body[0]).toEqual(pokemon3);
    });

    it("should respond with status 400 when sorter value is invalid", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
        
      const response = await server.get("/pokemon/sortBy/invalid").set("Authorization", `Bearer ${token}`);
        
      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    describe("when query filters are used", () => {
      it("should respond with status 200 and pokemons data if querys are correct", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
        const dragon1 = await createPokemon({ type1: "dragon", atk: 4 });
        const dragon2 = await createPokemon({ type2: "dragon", atk: 31 });
        const dragon3 = await createPokemon({ type2: "dragon", atk: 221 });
        const dragon4 = await createPokemon({ type1: "dragon", atk: 1000 });
        await generate3Pokemons();
            
        const responsePage1 = await server.get("/pokemon/sortBy/atk?direction=asc&page=0&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
        const responsePage2 = await server.get("/pokemon/sortBy/atk?direction=asc&page=1&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.OK);
        expect(responsePage2.status).toBe(httpStatus.OK);
        expect(responsePage1.body).toHaveLength(2);
        expect(responsePage2.body).toHaveLength(2);
        expect(responsePage1.body).toContainEqual(dragon1);
        expect(responsePage1.body).toContainEqual(dragon2);
        expect(responsePage2.body).toContainEqual(dragon3);
        expect(responsePage2.body).toContainEqual(dragon4);
      });

      it("should use direction as 'desc' if value is invalid", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
        const dragon1 = await createPokemon({ type1: "dragon", atk: 4 });
        const dragon2 = await createPokemon({ type2: "dragon", atk: 31 });
        const dragon3 = await createPokemon({ type2: "dragon", atk: 221 });
        const dragon4 = await createPokemon({ type1: "dragon", atk: 1000 });
        await generate3Pokemons();
            
        const responsePage1 = await server.get("/pokemon/sortBy/atk?direction=invalid&page=0&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
        const responsePage2 = await server.get("/pokemon/sortBy/atk?direction=invalid&page=1&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.OK);
        expect(responsePage2.status).toBe(httpStatus.OK);
        expect(responsePage1.body).toHaveLength(2);
        expect(responsePage2.body).toHaveLength(2);
        expect(responsePage1.body).toContainEqual(dragon4);
        expect(responsePage1.body).toContainEqual(dragon3);
        expect(responsePage2.body).toContainEqual(dragon2);
        expect(responsePage2.body).toContainEqual(dragon1);
      });

      it("should respond with status 200 and an empty array if given type doesnt exist", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
        await generate3Pokemons();
            
        const responsePage1 = await server.get("/pokemon/sortBy/atk?direction=asc&page=0&pageSize=2&type=notExisitng").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.OK);
        expect(responsePage1.body).toEqual([]);
      });

      it("should respond with status 400 if paging values are incorrect", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
            
        const responsePage1 = await server.get("/pokemon/sortBy/atk?direction=asc&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.BAD_REQUEST);
      });

      it("should respond with status 400 if paging values are incorrect", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
            
        const responsePage1 = await server.get("/pokemon/sortBy/atk?direction=asc&page=0&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.BAD_REQUEST);
      });

      it("should respond with status 400 if paging values are incorrect", async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
            
        const responsePage1 = await server.get("/pokemon/sortBy/atk?direction=asc&page=-1&pageSize=2&type=dragon").set("Authorization", `Bearer ${token}`);
            
        expect(responsePage1.status).toBe(httpStatus.BAD_REQUEST);
      });
    });
  });
});
  
describe("GET /pokemon/:id", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/pokemon/1");
        
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
        
  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();
    const response = await server.get("/pokemon/1").set("Authorization", `Bearer ${token}`);
        
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
        
  it("should respond with status 401 if there is no session for given token", async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
    const response = await server.get("/pokemon/1").set("Authorization", `Bearer ${token}`);
        
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  describe("when token is valid", () => {
    it("should respond with status 200 and pokemon data", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const {
        pokemon1,
      } = await generate3Pokemons();
      
      const response = await server.get(`/pokemon/${pokemon1.id}`).set("Authorization", `Bearer ${token}`);
      
      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toEqual(pokemon1);
    });
  
    it("should respond with status 400 if pokemonId is invalid", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
          
      const response = await server.get("/pokemon/-1").set("Authorization", `Bearer ${token}`);
          
      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });
  
    it("should respond with status 400 if pokemonId is invalid", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
            
      const response = await server.get("/pokemon/a").set("Authorization", `Bearer ${token}`);
            
      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });
  });
});

describe("GET /pokemon/pokedex/:pokedexNumber", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/pokemon/pokedex/1");
          
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
          
  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();
    const response = await server.get("/pokemon/pokedex/1").set("Authorization", `Bearer ${token}`);
          
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
          
  it("should respond with status 401 if there is no session for given token", async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
    const response = await server.get("/pokemon/pokedex/1").set("Authorization", `Bearer ${token}`);
          
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  describe("when token is valid", () => {
    it("should respond with status 200 and pokemon data", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const {
        pokemon1,
      } = await generate3Pokemons();
        
      const response = await server.get(`/pokemon/pokedex/${pokemon1.pokedexNumber}`).set("Authorization", `Bearer ${token}`);
        
      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toContainEqual(pokemon1);
    });
    
    it("should respond with status 400 if pokedexNumber is invalid", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
            
      const response = await server.get("/pokemon/pokedex/-1").set("Authorization", `Bearer ${token}`);
            
      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });
    
    it("should respond with status 400 if pokedexNumber is invalid", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
              
      const response = await server.get("/pokemon/pokedex/a").set("Authorization", `Bearer ${token}`);
              
      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });
  });
});

describe("GET /pokemon/search/:keyword", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/pokemon/search/pikachu");
          
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
          
  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();
    const response = await server.get("/pokemon/search/pikachu").set("Authorization", `Bearer ${token}`);
          
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
          
  it("should respond with status 401 if there is no session for given token", async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
    const response = await server.get("/pokemon/search/pikachu").set("Authorization", `Bearer ${token}`);
          
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  describe("when token is valid", () => {
    it("should respond with status 200 and pokemon data", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      await generate3Pokemons();

      const bulbasaur = await createPokemon({ name: "bulbasaur", pokedexNumber: 1 });
      const ivysaur = await createPokemon({ name: "ivysaur", pokedexNumber: 2 });
      const venusaur = await createPokemon({ name: "venusaur", pokedexNumber: 3 });
        
      const response = await server.get(`/pokemon/search/saur`).set("Authorization", `Bearer ${token}`);
        
      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toEqual([ bulbasaur, ivysaur, venusaur]);
    });

    it("should respond with status 200 and empty array", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
          
      const response = await server.get(`/pokemon/search/chu`).set("Authorization", `Bearer ${token}`);
          
      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toEqual([]);
    });
  });
});
