import React from 'react';
import { shallow } from 'enzyme';
import Container from './container';

describe('client/container.js', () => {
  it('renders container with the provided header and content', () => {
    const wrapper = shallow(
      <Container header="Test Example">
        Test Content goes here...
      </Container>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders nothing if header is not defined', () => {
    const wrapper = shallow(
      <Container>
        Test Content goes here...
      </Container>
    );

    expect(wrapper.html()).toBeNull();
  });

  it('renders nothing if content is not defined', () => {
    const wrapper = shallow(
      <Container header="Test Example" />
    );

    expect(wrapper.html()).toBeNull();
  });
});
