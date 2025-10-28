const request = require('supertest');
const { app, start, stop } = require('../src/server');
const mongoose = require('mongoose');
const RequestType = require('../src/models/RequestType');

let server;

beforeAll(async () => {
  process.env.MONGO_URI = 'mongodb://localhost:27017/support-api-test';
  server = await start();
});

afterAll(async () => {
  await stop(); 
  await mongoose.connection.close();
});

test('GET /health', async () => {
  const res = await request(server).get('/health');
  expect(res.status).toBe(200);
  expect(res.body.status).toBe('ok');
});

describe('RequestTypes API', () => {
  test('POST /api/request-types crée un type', async () => {
    const payload = {
      code: 'TEST_1',
      name: 'Test',
      description: 'desc',
      category: 'demo',
    };
    const res = await request(server).post('/api/request-types').send(payload);
    expect(res.status).toBe(201);
  });

  test('GET /api/request-types renvoie un tableau', async () => {
    const res = await request(server).get('/api/request-types');
    expect(Array.isArray(res.body)).toBe(true);
  });
});
