import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import action from '@storybook/addon-actions';

import StatusButton from './StatusButton';
import { STATUSES } from './constants';

storiesOf('components/StatusButton', module)
  .add('Default', () => {
    const [status, setStatus] = useState<number>(1);

    const handleClick: React.ReactEventHandler = () => {
      action('click');
    };
  
    const handleNextStatus = () => action('next status');

    return (
      <StatusButton currentStatus={status} statuses={STATUSES} onClick={handleClick} onNextStatus={handleNextStatus} />
    );
  });
