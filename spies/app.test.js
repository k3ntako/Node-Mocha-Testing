const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Kentaro', 23);
    expect(spy).toHaveBeenCalledWith('Kentaro', 23);
  });

  it('should call saveUser with user object', () => {
    let email = 'kentaro@example.com';
    let password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
