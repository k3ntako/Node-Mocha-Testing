const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello test response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello test.')
        .end(done);
    });
  });

  describe('GET /api/v1/todos', () => {
    it('should return all todos', (done) => {
      request(app)
        .get('/api/v1/todos')
        .expect(200)
        .expect({
          todos: [
            {
              todo: "Homework",
              completed: false
            },
            {
              todo: "Walk the dog",
              completed: false
            }
          ]
        })
        .end(done);
    });
  });

  describe('GET /api/v1/users', () => {
    it('should include Kentaro', (done) => {
      request(app)
        .get('/api/v1/users')
        .expect(200)
        .expect((res) => {
          expect(res.body.users).toInclude({
            name: "Kentaro",
            age: 23
          })
        })
        .end(done);
    });
  });

  describe('GET /test', () => {
    it('should return hello test response', (done) => {
      request(app)
        .get('/test')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });
});
