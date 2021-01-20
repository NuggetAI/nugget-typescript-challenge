import * as React from 'react';

export interface IStatusButtonProps {
  statuses: IStatus[];
  currentStatus: number;
  onClick: React.ReactEventHandler;
  onNextStatus: React.ReactEventHandler;
}
