import React from 'react';

import { IStatus } from '../../Interfaces/Interfaces';
import { IStatusButtonProps } from './statusButton.d';

const StatusButton: React.FC<IStatusButtonProps> = ({
  statuses,
  currentStatus,
  onClick,
  onNextStatus,
}) => {
  return (
    <div data-test-id="status-button">StatusButton</div>
  )
};

export default StatusButton;
