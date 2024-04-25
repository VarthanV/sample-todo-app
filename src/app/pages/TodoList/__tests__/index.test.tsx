import * as React from 'react';
import { render } from '@testing-library/react';

import { TodoList } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<TodoList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TodoList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
