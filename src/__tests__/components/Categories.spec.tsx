import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Categories from '../../components/pages/Home/Categories';

jest.mock('../../hooks/useAxios', () => {
  return {
    useAxios: () => ({
      data: [
        {
          id: 1,
          title: 'Lanches',
          image_url:
            'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-lanches-v2.jpg',
        },
      ],
      error: '',
    }),
  };
});

interface ILink {
  children: React.ReactNode;
}

jest.mock('next/link', () => ({ children }: ILink) => children);

describe('Category', () => {
  it('should be able to render the categories component', async () => {
    const { debug, getByAltText } = render(
      <Provider store={store}>
        <Categories />
      </Provider>,
    );

    const categoryImage = getByAltText('Lanches');

    fireEvent.click(categoryImage);

    debug();
  });
});
