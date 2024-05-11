const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should display the form', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('<form action="/sum" method="post">');
  });
});

describe('POST /sum', () => {
  it('should calculate the sum of two numbers', async () => {
    const res = await request(app).post('/sum').send({ num1: 5, num2: 7 });
    // console.log(res);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('The sum is 12');
  });

  it('should return an error if the numbers are invalid', async () => {
    const res = await request(app).post('/sum').send({ num1: 'abc', num2: '7' });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain('Invalid numbers');
  });
});