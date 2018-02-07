import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../components/Button';

const onClick = click  => {
  const buttonContent = click.target.textContent;
  const textEl = document.getElementById('write-out');
  textEl.innerHTML = `Clicked ${buttonContent}`;
  setTimeout(() => textEl.innerHTML = '', 1000);
};

storiesOf('Button')
  .add('with text', () => (
    <div>
      <Button onClick={onClick}>Hello Button</Button>
      <div id="write-out"></div>
    </div>
  ))
  .add('with some emoji', () => (
    <div>
      <Button onClick={onClick}>😀 😎 👍 💯</Button>
      <div id="write-out"></div>
    </div>
  ));
