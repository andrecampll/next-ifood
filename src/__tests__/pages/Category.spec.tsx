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
  it('should be able to render the category page with a restaurant', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Category
          restaurants={[
            {
              id: 1,
              title: 'Sushi Boulevard',
              image_url:
                'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/c48cbb89-0ddb-48ec-83cd-25946fe8c78f/201908131950_v914_i.png',
              category: 'japonesa',
              distance: 3.976,
              start_time: 43,
              end_time: 53,
              rating: 4.8,
            },
          ]}
        />
      </Provider>,
    );

    const title = getByText('Sushi Boulevard');

    const { nodeValue } = title.lastChild;

    expect(nodeValue).toBe('Sushi Boulevard');
  });
});
