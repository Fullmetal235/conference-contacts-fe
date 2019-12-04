import React from 'react';

import {
  renderApollo,
  cleanup,
  waitForElement,
} from '../../test-utils';
import Profile, { GET_USER_PROFILE } from '../profile';



const mockUser = {
  __typename: 'User',
  id: 1,
  name: 'Jarvise',
  pictures: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/GutsBerserk.PNG/200px-GutsBerserk.PNG',
};

describe('Profile Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders profile page', async () => {
    const mocks = [
      {
        request: { query: GET_USER_PROFILE },
        result: { data: { User: mockUser } },
      },
    ];

    const { getByText } = renderApollo(<Profile />, { mocks });

    // if the profile renders, it will have the list of missions booked
    await waitForElement(() => getByText(/Jarvise/i));
  });
});