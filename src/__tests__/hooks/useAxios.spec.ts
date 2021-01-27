import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { useAxios } from '../../hooks/useAxios';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Axios hook', () => {
  it('should be able to return a array of food categories', async () => {
    apiMock.onGet('categories').reply(200, [
      {
        id: 1,
        title: 'Lanches',
        image_url:
          'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-lanches-v2.jpg',
      },
      {
        id: 2,
        title: 'Japonesa',
        image_url:
          'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-japonesa.jpg',
      },
    ]);

    const { result, waitForNextUpdate } = renderHook(() =>
      useAxios('categories'),
    );

    await waitForNextUpdate();

    expect(result.current.data[0].title).toEqual('Lanches');
    expect(result.current.data[1].title).toEqual('Japonesa');
  });
});
