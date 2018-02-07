import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../components/Button';
import './stories.css';

const onClick = click  => {
  const buttonContent = click.target.textContent;
  const textEl = document.getElementById('write-out');
  textEl.innerHTML = `Clicked ${buttonContent}`;
  setTimeout(() => textEl.innerHTML = '', 1000);
};

storiesOf('Button')
  .add('with text', () => <Button onClick={onClick}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={onClick}>😀 😎 👍 💯</Button>);

storiesOf('Button/decorators')
  .addDecorator(story => (
    <div className='decorated'>
      {story()}
      <div id="write-out"></div>
    </div>
  ))
  .add('with text', () => <Button onClick={onClick}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={onClick}>😀 😎 👍 💯</Button>);
