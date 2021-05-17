'use strict';

const server = require( '../src/server' );

const supertest = require('supertest');
const serverfn = supertest(server.app);

describe('Server test', ()=> {
    it('404 on a bad route', async () => {
        let res = await serverfn.get('/random');
        expect(res.status).toEqual(404);
    });
    it('404 on a bad method', async ()=> {
        let res = await serverfn.post('/person');
        expect(res.status).toEqual(404);
    });
    it('500 if no name in the query string', async ()=> {
        let res = await serverfn.get('/person?name=');
        expect(res.status).toEqual(500);
    });
    it('200 if the name is in the query string', async ()=> {
        let res = await serverfn.get('/person?name=Emran');
        expect(res.status).toEqual(200);
    });
    it('response object is correct', async ()=> {
        let res = await serverfn.get('/person?name=Emran');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({
            name: "Emran"
        });
    });
});