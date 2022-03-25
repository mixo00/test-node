import 'jest';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

const app = require('./index.ts');

describe('status integration tests', () => {
  it('should post the error', async () => {
    await request(app).post('/calculate').set('Accept', 'application/json').expect(StatusCodes.BAD_REQUEST);
  });

  it('should post the error with letter', async () => {
    await request(app).post('/calculate').send({ number: 'F' }).set('Accept', 'application/json').expect(StatusCodes.BAD_REQUEST);
  });

  it('should post the error with negative number', async () => {
    await request(app).post('/calculate').send({ number: -1 }).set('Accept', 'application/json').expect(StatusCodes.BAD_REQUEST);
  });

  it('should post the ok', async () => {
    await request(app)
      .post('/calculate')
      .send({ number: 10 })
      .set('Accept', 'application/json')
      .expect(StatusCodes.OK)
      .then((res) => {
        expect(res.body.numbers).toStrictEqual([7, 5, 3, 2]);
      });
  });

  it('should get html the ok', async () => {
    await request(app).get('/').expect(StatusCodes.OK);
  });
});
