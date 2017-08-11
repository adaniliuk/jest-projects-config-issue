import init from './server';

describe('server/server.js', () => {
  it('returns undefined if no options provided', () => {
    expect (init()).toBeUndefined();
  });
});
