const request = require('supertest');

const server = require('../../Server/server');
const db = require('../../data/dbConfig');

beforeEach(() => {
    return db('schedule').truncate();
});

const schedulea = [
    {
        user_id: 2,
        shift: 'morning',
        monday: '6am-4pm',
        tuesday: '6am-4pm',
        wednesday: '6am-4pm',
        thursday: '5pm-12am',
        friday: 'off',
        saturday: '3pm-12am',
        sunday: 'off',
        start_date: '5/25/2020'
    },
    {
        user_id: 2,
        shift: 'morning',
        monday: '6am-4pm',
        tuesday: '6am-4pm',
        wednesday: '6am-4pm',
        friday: 'off',
        saturday: '3pm-12am',
        sunday: 'off',
        start_date: '5/25/2020'
    },
]

describe('SCHEDULE ROUTES', () => {
    describe('GET /schedule/:id', () => {

        it('should return an array', async () => {
            const res = await request(server).get('/schedule/2');
            
            expect(Array.isArray(res.body)).toBe(true);
        });

        it('should return an array of weeks', async () => {
            const res = await request(server).get('/schedule/2');

            expect(res.body.length).toBe(1);
            expect(res.body[0].monday).toBe('3pm-12am');
        });

        it('should return the date at the start of the week', async () => {
            const res = await request(server).get('/schedule/2');

            expect(res.body[0].start_date).toBe('5/25/2019');
        });

        it('should return status 200', async () => {
            const res = await request(server).get('/schedule/2');

            expect(res.status).toBe(200);
        });
    });

    describe('GET /schedule/:id/:start', () => {

        it('should return a single week', async () => {
            const res = await request(server).get('/schedule/2/5252020');

            expect(res.body.length).toBe(1);
        });

        it('should return the week based on start date', async () => {
            const res = await request(server).get('/schedule/2/5252020');

            expect(res.body.start_date).toBe('5/25/2020');
        });

        it('should return status 200 if week found', async () => {
            const res = await request(server).get('/schedule/2/5252020');

            expect(res.status).toBe(200);
        });

        it('it should return status 406 if week has passed', async () => {
            const res = await request(server).get('/schedule/2/5252019');

            expect(res.status).toBe(406);
        });

        it('should return status 404 if no schedule found for start date', async () => {
            const res = await request(server).get('/schedule/2/45');

            expect(res.status).toBe(404);
        });
    });

    describe("POST /schedule", () => {
        it('should return status 201 if successful', async () => {
            const res = await request(server).post('/schedule').send(schedules[0]);

            expect(res.status).toBe(201);
        });

        it('should return status 400 if missing field', async () => {
            const res = await request(server).post('/schedule').send(schedules[1]);

            expect(res.status).toBe(400);
        });

        it('should return a JSON package', async () => {
            const res = await request(server).post('/schedule').send(schedules[0]);

            expect(res.type).toBe('application/json');
        });

        it('should return the added schedule with ID', async () => {
            const res = await request(server).post('/schedule').send(schedules[0]);

            const added = schedules[0];
            added.id = 3;

            expect(res.body).toEqual(added);
        });
    });
});