const request = require('supertest');
const app = require('../src/app');

describe('POST /sum', () => {
  it('should calculate the sum of two numbers', async () => {
    const res = await request(app).post('/sum').send({ num1: 5, num2: 7 });
    // console.log(res);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('The sum is 12');
  });

  it('should return 400 if num1 is not a number', async () => {
    const response = await request(app)
        .post('/sum')
        .send({ num1: 'abc', num2: 5 });
    
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Invalid numbers');
  });

  it('should return 400 if num2 is not a number', async () => {
      const response = await request(app)
          .post('/sum')
          .send({ num1: 5, num2: 'xyz' });
      
      expect(response.statusCode).toBe(400);
      expect(response.text).toBe('Invalid numbers');
  });
});