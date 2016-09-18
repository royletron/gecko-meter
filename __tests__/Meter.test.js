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

it('should report min if value is less than min', () => {
  const component = renderer.create(
    <Meter min={10} max={100} value={1} />
  )
  let tree = component.toJSON();
  //Do shot with correct values;
  expect(tree).toMatchSnapshot();
  //Set value less than min
  tree.props.value = 1;
  //Do the shot again
  expect(tree).toMatchSnapshot();
})

it('should report max if value is greater than max', () => {
  const component = renderer.create(
    <Meter min={10} max={100} value={100} />
  )
  let tree = component.toJSON();
  //Do shot with correct values;
  expect(tree).toMatchSnapshot();
  //Set value greater than max
  tree.props.value = 300;
  //Do the shot again
  expect(tree).toMatchSnapshot();
})


it('should flip min and max values if they are the wrong way around', () => {
  const component = renderer.create(
    <Meter min={10} max={100} value = {1} />
  )
  let tree = component.toJSON();
  //Do shot with correct values;
  expect(tree).toMatchSnapshot();
  //Rearrange the same values but the wrong way around
  tree.props.min = 100;
  tree.props.max = 10;
  //Do the shot again
  expect(tree).toMatchSnapshot();
})
