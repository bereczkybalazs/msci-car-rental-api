const carController = require('./car-controller');

describe(`cars-controller get`, () => {
  it(`should call the req`, () => {
    const res = {
      send: jest.fn()
    };
    carController.get({}, res);
    expect(res.send.mock.calls[0][0]).toBe('list of cars');
  })
});
