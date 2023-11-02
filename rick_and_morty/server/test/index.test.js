const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
describe('Test de RUTAS', () => { 

    describe('GET /rickandmorty/character/:id', () => {
        
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200)
        });
        
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image',async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        });
        
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/9999').expect(500)
        });
    })
    
    describe('GET /rickandmorty/login', () => { 
        it('Debes obtener un access:true',async () => {
            const response = (await agent.get('/rickandmorty/login')).body;
            expect(response.access).toEqual(false)
        });
     })
})