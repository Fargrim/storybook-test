import {configure} from '@storybook/react';

function loadStories() {
  require('../src/stories/Button.js');
}

configure(loadStories, module);
