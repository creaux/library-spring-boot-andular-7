import { library, initialState } from './library.reducer';

describe('Library Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = library(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
