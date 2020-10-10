import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../../hooks/useFetchGifs';

describe('Pruebas en useFetchGifs', () => {
  test('debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One punch')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('debe retornar un arreglo de imagenes y loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One punch')
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
