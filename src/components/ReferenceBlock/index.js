// @flow
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import type { SlateNodeProps as Props } from '../../types';
import RefCell, { GripRow, GripColumn, GripTable } from './RefCell';
import Scrollable from './Scrollable';

// Looking for logic for the table controls and toolbars?
// It mostly lives in the "Cell" component and the Table plugin

class ReferenceBlock extends React.Component<Props> {
  table: HTMLTableElement;

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.handleOutsideMouseClick);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('click', this.handleOutsideMouseClick);
    }
  }

  handleOutsideMouseClick = (ev: SyntheticMouseEvent<>) => {
    const element = findDOMNode(this.table);

    if (
      !element ||
      (ev.target instanceof Node && element.contains(ev.target))
    ) {
      return;
    }

    this.props.editor.clearSelected(this.props.node);
  };

  render() {
    const { children, attributes } = this.props;

    return (
      <Scrollable>
        <StyledTable ref={ref => (this.table = ref)} {...attributes}>
          <tbody>{children}</tbody>
        </StyledTable>
      </Scrollable>
    );
  }
}

const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;
  border-radius: 4px;
  /* border: 1px solid ${props => props.theme.tableDivider}; */
  border: none;

  * {
    box-sizing: initial;
  }

  /* ${GripColumn},
  ${GripRow},
  ${GripTable} {
    opacity: 0;
    transition: opacity 100ms ease-in-out;
  } */
  &:hover {
    /* ${RefCell} {
      opacity: 1;
      background: grey;
    } */
    background: #2f2c2c;
  }

`;

export default ReferenceBlock;
