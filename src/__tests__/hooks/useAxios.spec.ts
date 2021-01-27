import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { useAxios } from '../../hooks/useAxios';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Axios/SWR hook', () => {
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

  it('should be able to return a array of foods', async () => {
    apiMock.onGet('foods').reply(200, [
      {
        id: 1,
        title: 'Hamburger',
        image_url:
          'https://static-images.ifood.com.br/image/upload/t_high/pratos/98e65427-a33c-49ce-b3fc-637b4a460e7f/202006032000_AQcJ_l.jpg',
        description: 'Hamburger muito massa!',
        price: 25,
      },
      {
        id: 2,
        title: 'Batata frita',
        image_url:
          'https://static-images.ifood.com.br/image/upload/t_high/pratos/dbc629b1-71e7-406c-8959-d251540157f5/201907302128_YXOh_.jpeg',
        description: 'Batata muito massa!',
        price: 16,
      },
    ]);

    const { result, waitForNextUpdate } = renderHook(() => useAxios('foods'));

    await waitForNextUpdate();

    expect(result.current.data[0].title).toEqual('Hamburger');
    expect(result.current.data[1].title).toEqual('Batata frita');
  });
});
