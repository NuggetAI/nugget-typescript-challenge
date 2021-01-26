import styled, { css } from 'styled-components'
import { primary } from '../../constants/fonts'
import { status } from './status'

const btnRadius = css`
  border-radius: 4px;
`

export interface StatusButtonStyleProps {
  status: typeof status[number]
}

const StatusButton = styled.div<StatusButtonStyleProps>`
  display: flex;

  .button {
    padding: 13px 35px;
    ${btnRadius}
  }

  .sub-button {
    padding: 13px 10px;
    ${btnRadius}
  }

  .menu-item {
    font-family: ${primary};
    font-size: 14px;
  }
`

export const S = { StatusButton }
