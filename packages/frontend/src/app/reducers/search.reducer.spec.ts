import { search, initialState } from './search.reducer';

describe('Search Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = search(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
