import React from 'react';

import { render, cleanup } from '../../test-utils';
import NavLink from '../NavBar';

describe('Navbar', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    render(<span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/users">Users</NavLink>
      </span>);
  });
});