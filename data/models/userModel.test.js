const db = require('../dbConfig');
const Users = require('./userModel');

describe("USER MODEL", () => {
    describe("getAll()", () => {

        it('should return an array', () => {
            const users = Users.getAll();

            expect(Array.isArray(users)).toBe(true);
        });

        it('should return all the users in the database', () => {
            const users = Users.getAll();

            expect(users.length).toBe(2);
            expect(users[1].first_name).toBe('Amelia');
        });
    });

    describe("getByID", () => {

        it('should return an array', () => {
            const user = Users.getByID(2);
            
            expect(Array.isArray(user)).toBe(true);
        });

        it('should return the specified user'. () => {
            const user = Users.getByID(2)[0];

            expect(user.id).toBe(2);
        });

        it('should return \'No User Found\' message', () => {
            const user = Users.getByID(5);

            expect(user).toBe(/No User Found/i);
        });
    });
});