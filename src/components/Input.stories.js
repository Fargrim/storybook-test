import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../components/Input';
import './stories.css';

storiesOf('Input')
  .add('no props', () => <Input/>)
  .add('with placeholder', () => <Input placeholder="Enter text here..."/>)
  .add('with invalid value', () => (
    <Input
      value="Numbers only"
      validate={x =>x.indexOf(/[0-9]/) > -1}
    />
  ));
