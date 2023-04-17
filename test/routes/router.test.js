const req = require('supertest');
const app = require('../../app/server');

test('/pokemons should get status 200', async () => {
    const res = await req(app).get('/pokemons');

    expect(res.statusCode).toEqual(200);
});


test('/pokedex_number should get status 500 when req hasnt a body', async () => {
    const res = await req(app)
    .post('/pokemons/filters/pokedex_number');
    
    expect(res.statusCode).toEqual(500);
});

test('/pokedex_number should get status 200 when req has a body', async () => {
    const res = await req(app)
        .post('/pokemons/filters/pokedex_number')
        .send({pokedex_number: 25});

    expect(res.statusCode).toEqual(200);
});

test('/pokedex_number should get "Pikachu" when pokedex_number = 25', async () => {
    const res = await req(app)
        .post('/pokemons/filters/pokedex_number')
        .send({pokedex_number: 25});

    expect(res.body[0]['name']).toEqual("Pikachu");
});

test('/biggest_stat should get pokedex_number = 242', async () => {
    const res = await req(app)
        .get('/pokemons/finders/biggest_stat');

    expect(res.body[0]['pokedex_number']).toEqual(242);
});

test('/generation should get all pokemons from same generation', async () => {
    const res = await req(app)
        .post('/pokemons/filters/generation')
        .send({generation: 2});

    res.body.forEach(element => {
        expect(element['generation']).toEqual(2);
    });
});

test('/generation should get all pokemons with same type', async () => {
    const res = await req(app)
        .post('/pokemons/filters/type')
        .send({type_1: "poison"});

    res.body.forEach(element => {
        expect(element['type_1'] || element['type_2']).toMatch(/poison/);
    });
});
