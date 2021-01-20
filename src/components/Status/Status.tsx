import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import { IStatus } from '../../Interfaces/Interfaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  colorBox: {
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(0.25),
  },
}));

const ColorBox = styled.div`
  background: ${(props) => props.color};
  width: 18px;
  height: 18px; 
`;

const Status: React.FC<IStatus> = ({
  color,
  label,
  id,
}) => {
  const classes = useStyles();

  return (
    <Container data-test-id={`status-${id}`} className={classes.root}>
      <ColorBox className={classes.colorBox} color={color} />
      <Typography>{label}</Typography>
    </Container>
  );
};

export default Status;
