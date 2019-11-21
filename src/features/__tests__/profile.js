import React from 'react';

import {
  renderApollo,
  cleanup,
  waitForElement,
} from '../../testing-utils';
import Profile, { GET_USER_PROFILE } from '../profile/Profile';

const mockProfileField = {
    __typename: 'ProfileField',
    value: 'jarvise1337@gmail.com',
    type: 'EMAIL',
    privacy: 'PUBLIC',
    preferredContact: true
}


const mockUser = {
  __typename: 'User',
  name: 'Jarvise',
  picture: 'jarvise.png',
  bio: 'I love testing!!!!!',
  birthdate: '9/19/1990',
  jobtitle: 'Fullstack Dev',
  gender: 'MALE',
  industry:'Tech',
  profile: [mockProfileField]
};


describe('Profile Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders profile page', async () => {
    const mocks = [
      {
        request: { query: GET_USER_PROFILE },
        result: { data: { user: mockUser } },
      },
    ];

    const { getByText } = renderApollo(<Profile />, { mocks });

    // if the profile renders, it will have the list of profile fields
    await waitForElement(() => getByText(/Jarvise/i));
  });
});