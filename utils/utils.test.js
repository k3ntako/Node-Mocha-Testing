const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33,11);
  expect(res).toBe(44).toBeA('number');
});

it('should square number', () => {
  let res = utils.square(9);
  expect(res).toBe(81).toBeA('number');
});

it('should set first name and last names', () => {
  let user = {
    location: "Brookline, MA",
    age: 23
  };

  let res = utils.setName(user, "Kentaro Kaneki");
  expect(res).toInclude({
    firstName: "Kentaro",
    lastName: "Kaneki"
  });

  expect(res).toBeA('object');
});

it('should sum two numbers', (done) => {
  utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', (done) => {
  utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done();
  });
});
