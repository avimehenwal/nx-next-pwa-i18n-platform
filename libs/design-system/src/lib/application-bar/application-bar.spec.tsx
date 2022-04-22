import { render } from '@testing-library/react';

import ApplicationBar from './application-bar';

describe('ApplicationBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApplicationBar />);
    expect(baseElement).toBeTruthy();
  });
});
