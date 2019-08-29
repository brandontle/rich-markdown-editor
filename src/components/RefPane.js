// @flow
import * as React from 'react';
// import { map } from 'lodash';
import styled from 'styled-components';
import type { SlateNodeProps } from '../types';

export default function RefPane({
  children,
  node,
  readOnly,
  attributes,
  editor,
}: SlateNodeProps) {
  const { data } = node;
  // const language = data.get('language') || 'javascript';

  // const onSelectLanguage = ev => {
  //   editor.setNodeByKey(node.key, {
  //     data: { ...data, language: ev.target.value },
  //   });
  // };

  const handleRightChange = ev => {
    console.log('right event', ev);
    editor.setNodeByKey(node.key, {
      data: { ...data, right: ev.target.value },
    });
  };

  console.log('data', data);
  console.log('children', children);

  return (
    <Container {...attributes} spellCheck={false}>
      <Left>{children}</Left>
      <Right onChange={handleRightChange}>{data.right}</Right>
    </Container>
  );
}

/*
  Based on Prism template by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/prism/)
  Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)
*/

const Container = styled.div`
  display: flex;
  position: relative;

  background: ${props => props.theme.codeBackground};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.codeBorder};

  overflow-x: auto;

  &:hover {
    > span {
      opacity: 1;
    }
  }
`;

const Left = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 60%;

  word-break: break-word;
`;

const Right = styled.div`
  display: flex;
  background: yellow;
  width: 100%;

  word-break: break-word;
`;

const Code = styled.code`
  display: block;
  overflow-x: auto;
  padding: 0.5em 1em;
  line-height: 1.4em;

  pre {
    -webkit-font-smoothing: initial;
    font-family: ${props => props.theme.fontFamilyMono}
    font-size: 13px;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    color: ${props => props.theme.code};
    margin: 0;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${props => props.theme.codeComment};
  }

  .token.punctuation {
    color: ${props => props.theme.codePunctuation};
  }

  .token.namespace {
    opacity: .7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: ${props => props.theme.codeNumber};
  }

  .token.property {
    color: ${props => props.theme.codeProperty};
  }

  .token.tag {
    color: ${props => props.theme.codeTag};
  }

  .token.string {
    color: ${props => props.theme.codeString};
  }

  .token.selector {
    color: ${props => props.theme.codeSelector};
  }

  .token.attr-name {
    color: ${props => props.theme.codeAttr};
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${props => props.theme.codeEntity};
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: ${props => props.theme.codeKeyword};
  }

  .token.function {
    color: ${props => props.theme.codeFunction};
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: ${props => props.theme.codeStatement};
  }

  .token.placeholder,
  .token.variable {
    color: ${props => props.theme.codePlaceholder};
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted ${props => props.theme.codeInserted};
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: ${props => props.theme.codeImportant};
  }

  .token.entity {
    cursor: help;
  }
`;
