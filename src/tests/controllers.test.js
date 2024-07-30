const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database');
const Pokemon = require('../models/pokemonModel');
require('dotenv').config({ path: '.env.test' });

let token;

beforeAll(async () => {
  await sequelize.sync({ force: true });

  token = await authorizeUser();

  await Pokemon.bulkCreate([
    {
      name: 'Ivysaur',
      pokedexNumber: 2,
      imgName: '2',
      generation: 1,
      evolutionStage: 2,
      evolved: false,
      familyID: 1,
      crossGen: false,
      type1: 'grass',
      type2: 'poison',
      weather1: 'Sunny/clear',
      weather2: 'Cloudy',
      statTotal: 422,
      atk: 151,
      def: 151,
      sta: 120,
      legendary: true,
      aquireable: true,
      spawns: true,
      regional: false,
      raidable: false,
      hatchable: false,
      shiny: false,
      nest: false,
      new: false,
      notGettable: false,
      futureEvolve: false,
      cp40: 1552,
      cp39: 1529
    },
    {
      name: 'Mewtwo',
      pokedexNumber: 150,
      imgName: '150',
      generation: 1,
      evolutionStage: 1,
      evolved: false,
      familyID: 150,
      crossGen: false,
      type1: 'psychic',
      type2: null,
      weather1: 'None',
      weather2: 'None',
      statTotal: 680,
      atk: 300,
      def: 182,
      sta: 214,
      legendary: true,
      aquireable: false,
      spawns: false,
      regional: false,
      raidable: true,
      hatchable: false,
      shiny: false,
      nest: false,
      new: false,
      notGettable: false,
      futureEvolve: false,
      cp40: 4000,
      cp39: 3800
    }
  ]);
});

afterAll(async () => {
  await sequelize.close();
});

describe('AuthController', () => {
  describe('POST /auth/register', () => {
    it('should register a new user', async () => {
      await request(app)
        .post('/auth/register')
        .send({
          username: 'newuser',
          password: 'password'
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toMatchObject({
            id: expect.any(Number),
            username: 'newuser',
          });
          expect(res.body).not.toHaveProperty('password');
        });
    });

    it('should return 400 if username already exists', async () => {
      await request(app)
        .post('/auth/register')
        .send({
          username: 'existinguser',
          password: 'password'
        });

      const res = await request(app)
        .post('/auth/register')
        .send({
          username: 'existinguser',
          password: 'password'
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Username already taken');
    });
  });

  describe('POST /auth/login', () => {
    beforeAll(async () => {
      await request(app)
        .post('/auth/register')
        .send({
          username: 'loginuser',
          password: 'password'
        });
    });

    it('should login an existing user', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({
          username: 'loginuser',
          password: 'password'
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
    });

    it('should return 401 for invalid credentials', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({
          username: 'loginuser',
          password: 'wrongpassword'
        });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty('message');
    });
  });
});

describe('PokemonController', () => {
  it('should fetch all pokemons', async () => {
    await request(app)
      .get('/api/pokemons')
      .set('Authorization', `Bearer ${token}`)
      .query({ page: 1, size: 10 })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('total');
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
      });
  });

  it('should return 400 for invalid query parameters', async () => {
    await request(app)
      .get('/api/pokemons')
      .set('Authorization', `Bearer ${token}`)
      .query({ page: 'invalid', size: 'invalid' })
      .expect(400)
      .expect((res) => {
        expect(res.body).toHaveProperty('error', 'Invalid query parameters');
      });
  });

  it('should fetch a pokemon by ID', async () => {
    const pokemon = await Pokemon.findOne();
    await request(app)
      .get(`/api/pokemons/${pokemon.id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', pokemon.id);
        expect(res.body).toHaveProperty('name', pokemon.name);
      });
  });

  it('should return 404 for a nonexistent pokemon ID', async () => {
    await request(app)
      .get('/api/pokemons/999999')
      .set('Authorization', `Bearer ${token}`)
      .expect(404)
      .expect((res) => {
        expect(res.body).toHaveProperty('error', 'Pokemon not found');
      });
  });

  it('should fetch legendary pokemons', async () => {
    await request(app)
      .get('/api/legendary-pokemons')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('total', expect.any(Number));
        expect(res.body).toHaveProperty('data', expect.any(Array));
        res.body.data.forEach(pokemon => {
          expect(pokemon.legendary).toBe(true);
        });
      });
  });

  it('should return 401 for missing authorization token', async () => {
    await request(app)
      .get('/api/pokemons')
      .expect(401)
      .expect((res) => {
        expect(res.body).toHaveProperty('error', 'Unauthorized');
      });
  });

  it('should return 400 for invalid query parameters in legendary pokemons', async () => {
    await request(app)
      .get('/api/legendary-pokemons')
      .set('Authorization', `Bearer ${token}`)
      .query({ page: 'invalid', size: 'invalid' })
      .expect(400)
      .expect((res) => {
        expect(res.body).toHaveProperty('error', 'Invalid query parameters');
      });
  });

  it('should return 200 with empty data if no legendary pokemons are available', async () => {
    await Pokemon.destroy({ where: { legendary: true } });

    await request(app)
      .get('/api/legendary-pokemons')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('total', 0);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBe(0);
      });
  });
});

/**
 * @returns Promise<string>
 */
async function authorizeUser() {
  await request(app)
    .post('/auth/register')
    .send({ username: 'testuser', password: 'password' });

  const loginResponse = await request(app)
    .post('/auth/login')
    .send({ username: 'testuser', password: 'password' });

  return loginResponse.body.token;
}
