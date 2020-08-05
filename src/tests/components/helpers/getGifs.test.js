import '@testing-library/jest-dom';
import { getGifs } from '../../../helpers/getGifs';

describe('Testing getGif helper function', () => {
  test('it should return 10 elements', async () => {
    const gifs = await getGifs('asd');
    expect(gifs.length).toBe(10);
  });

  test('it should return 0 elements if empty string', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
