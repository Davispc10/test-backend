import { randomUUID } from "crypto"; 'crypto'
export const transformPokemonData = (data) => {
    const toBoolean = (val) => val === 1;

    return {
        id: randomUUID(),
        row: parseInt(data.Row) || null,
        name: data.Name || null,
        pokedexNumber: parseInt(data['Pokedex Number']) || null,
        imgName: data['Img name'] || null,
        generation: parseInt(data.Generation) || null,
        evolutionStage: data['Evolution Stage'] || null,
        evolved: toBoolean(data.Evolved),
        familyId: parseInt(data.FamilyID) || null,
        crossGen: parseInt(data['Cross Gen']) || parseInt(data['Cross Gen']) === 0 ? parseInt(data['Cross Gen']) : null,
        type1: data['Type 1'] || null,
        weather1: data['Weather 1'] || null,
        statTotal: parseInt(data['STAT TOTAL']) || null,
        atk: parseInt(data.ATK) || null,
        def: parseInt(data.DEF) || null,
        sta: parseInt(data.STA) || null,
        legendary: parseInt(data.Legendary) || parseInt(data.Legendary) === 0 ? parseInt(data.Legendary) : null,
        aquireable: parseInt(data.Aquireable) || parseInt(data.Aquireable) === 0 ? parseInt(data.Aquireable) : null,
        spawns: parseInt(data.Spawns) ||  parseInt(data.Spawns) === 0 ? parseInt(data.Spawns) : null,
        regional: toBoolean(data.Regional) || false,
        raidable: parseInt(data.Raidable) || parseInt(data.Raidable) === 0 ? parseInt(data.Raidable) : null,
        hatchable: parseInt(data.Hatchable) || parseInt(data.Hatchable) === 0 ? parseInt(data.Hatchable) : null,
        shiny: toBoolean(data.Shiny),
        nest: toBoolean(data.Nest),
        isNew: toBoolean(data.New),
        notGettable: toBoolean(data['Not-Gettable']),
        futureEvolve: toBoolean(data['Future Evolve']),
        cp100At40: parseInt(data['100% CP @ 40']) || null,
        cp100At39: parseInt(data['100% CP @ 39']) || null
    };
};
