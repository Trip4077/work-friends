require('dotenv').config();

const request = require('supertest');
const server = require('./server');

describe("SERVER", () => {
    describe('Environment', () => {
        it('should set test environment', () => {
            const env = process.env.DB_CONNECT;

            expect(env).toBe('testing');
        });
    });

    describe('GET /', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/');

            expect(res.status).toBe(200);
        });

        it('should return a JSON packet', async () => {
            const res = await request(server).get('/');

            expect(res.type).toBe('application/json');
        });

        it('should return a \'Server Running\' message', async () => {
            const res = await request(server).get('/');

            expect(res.body).toEqual({ api: "Server Running" });
        });
    });
});