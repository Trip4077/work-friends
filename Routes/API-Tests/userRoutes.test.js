const request = require('supertest');

const server = require('../../Server/server');
const db = require('../../data/dbConfig');

beforeEach(() => {
    return db('users').truncate();    
});

describe("USER ROUTES", () => {
    describe('GET /users', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/users');

            expect(res.status).toBe(200);
        });

        it('should return a json packet', async () => {
            const res = await request(server).get('/users');

            expect(res.type).toBe('application/json');
        });

        it('should return an array', async () => {
            const res = await request(server).get('/users');

            expect(Array.isArray(res.body)).toBe(true);
        });

        it('should return all users in database', async () => {
            const res = await request(server).get('/users');

            expect(res.body.length).toBe(2);
        });

        it('should return an empty array if no users found', async () => {
            const res = await request(server).get('/users');

            expect(res.body).toBe([]);
        });
    });

    describe('GET /users/:id', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/users/2');

            expect(res.status).toBe(200);
        });

        it('should return a status 404 if no user found', async () => {
            const res = await request(server).get('/users/5');

            expect(res.status).toBe(404);
        });

        it('should return a json packet', async () => {
            const res = await request(server).get('/users/2');

            expect(res.type).toBe('application/json');
        });

        it('should return an array', async () => {
            const res = await request(server).get('/users/2');

            expect(Array.isArray(res.body)).toBe(true);
        });

        it('should return a single user', async () => {
            const res = await request(server).get('/users/2');

            expect(res.body.length).toBe(1);
        });

        it('should return the specified user', async () => {
            const res = await request(server).get('/users/2');

            expect(res.body.first_name).toBe('Amelia');
        });
    });
});