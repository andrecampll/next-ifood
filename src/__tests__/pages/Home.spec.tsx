import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import List from '../../pages/lista-restaurantes';

describe('List', () => {
  it('should be able to render the list page with categories and restaurants', () => {
    const { debug } = render(
      <Provider store={store}>
        <List />
      </Provider>,
    );

    debug();
  });
});
