'use strict';

import React from 'react';
import Link from '../Link';
import Meter from '../src/components/Meter';
import renderer from 'react-test-renderer';

it('should display the correct values', () => {
  const component = renderer.create(
    <Meter min={10} max={100} value={40} />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

it('should display with prefix', () => {
  const component = renderer.create(
    <Meter pre='£' min={10} max={100} value={40} />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
