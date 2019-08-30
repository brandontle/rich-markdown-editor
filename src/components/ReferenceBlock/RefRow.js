// @flow
import * as React from 'react';
import styled from 'styled-components';
import type { SlateNodeProps } from '../../types';

const RefRow = ({ children, attributes }: SlateNodeProps) => {
  return <StyledTr {...attributes}>{children}</StyledTr>;
};

export default RefRow;

const StyledTr = styled.tr`
  display: flex;
  /* flex-wrap: wrap; */

  position: relative;

  /* border-bottom: 1px solid ${props => props.theme.tableDivider}; */
  border: none;
  overflow: hidden;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
