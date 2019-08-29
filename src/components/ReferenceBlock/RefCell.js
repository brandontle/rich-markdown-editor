// @flow
import * as React from 'react';
import styled from 'styled-components';
import type { SlateNodeProps as Props } from '../../types';
// import Toolbar from './Toolbar';
import Grip from './Grip';

class RefCell extends React.Component<Props> {
  cell: ?HTMLElement;

  render() {
    const { children, editor, readOnly, attributes, node } = this.props;
    // const { document } = editor.value;

    return (
      <StyledTd ref={ref => (this.cell = ref)} {...attributes}>
        <RowContent align={node.data.get('align')}>{children}</RowContent>
      </StyledTd>
    );
  }
}

export const GripTable = styled(Grip)`
  width: 13px;
  height: 13px;
  border-radius: 13px;
  border: 2px solid ${props => props.theme.background};

  position: absolute;
  top: -18px;
  left: -18px;
`;

export const GripRow = styled(Grip)`
  left: -16px;
  top: 0px;
  height: 100%;
  width: 12px;
  border-right: 3px solid ${props => props.theme.background};

  ${props =>
    props.isFirstRow &&
    `
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  `}

  ${props =>
    props.isLastRow &&
    `
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  `}
`;

export const GripColumn = styled(Grip)`
  top: -16px;
  left: 0px;
  width: 100%;
  height: 12px;
  border-bottom: 3px solid ${props => props.theme.background};

  ${props =>
    props.isFirstColumn &&
    `
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`}

  ${props =>
    props.isLastColumn &&
    `
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`}
`;

const RowContent = styled.div`
  width: 100%;
  padding: 4px 0;
  text-align: ${props => props.align};
`;

const StyledTd = styled.td`
  vertical-align: top;
  position: relative;

  border: none;
  background: none;
  /* background: ${props =>
    props.isSelected
      ? props.theme.tableSelectedBackground
      : props.theme.background}; */

  margin: 7px 0;
  padding-right: 30px;
  box-sizing: border-box;
  ${props =>
    props.isFirstRow &&
    `
  min-width: 100px;
  `}

  &:first-of-type {
    display: flex;
    width: 100%;
    max-width: 700px;
    padding-right: 30px;
    box-sizing: border-box;
  }
  &:nth-of-type(2) {
    display: flex;
    width: 100%;
    max-width: 450px;
    border-left: 1px solid ${props => props.theme.tableDivider};
    padding-left: 30px;
    box-sizing: border-box;
  }
`;

export default RefCell;
