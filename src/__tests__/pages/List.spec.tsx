import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import List from '../../pages/lista-restaurantes';

describe('Category', () => {
  it('should be able to render the list page with categories', () => {
    const { debug } = render(
      <Provider store={store}>
        <List />
      </Provider>,
    );

    debug();
  });
});
