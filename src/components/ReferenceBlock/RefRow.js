// @flow
import * as React from 'react';
import styled from 'styled-components';
import type { SlateNodeProps } from '../../types';

const StyledTr = styled.tr`
  display: flex;
  position: relative;
  /* border-bottom: 1px solid ${props => props.theme.tableDivider}; */
  border: none;
`;

const RefRow = ({ children, attributes }: SlateNodeProps) => {
  return <StyledTr {...attributes}>{children}</StyledTr>;
};

export default RefRow;
