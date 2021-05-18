'use strict';

const server = require( '../src/server' );

const supertest = require('supertest');
const serverfn = supertest(server.app);

describe('Valicator test', ()=> {
  it('500', async () => {
    let res = await serverfn.get('/person?name=2');
    expect(res.status).toEqual(500);
  });
});