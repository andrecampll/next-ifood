import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Category from '../../pages/categories/[category_slug]';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn(() => ({
      query: {
        category_slug: 'japonesa',
      },
    })),
  };
});

describe('Category', () => {
  it('should be able to render the first page', () => {
    const { debug } = render(
      <Provider store={store}>
        <Category
          restaurants={[
            {
              id: 1,
              title: 'string',
              image_url: 'string',
              category: 'string',
              distance: 1,
              start_time: 1,
              end_time: 1,
              rating: 1,
            },
          ]}
        />
      </Provider>,
    );

    debug();
  });
});
