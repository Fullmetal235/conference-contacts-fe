import React from 'react';

import { render, cleanup } from '../../testing-utils';
import NavLink from '../navlink';

describe('navlink', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    render(<NavLink to='settings' />);
  });
});