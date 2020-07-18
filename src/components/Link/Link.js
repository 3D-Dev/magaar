// @flow

import React from 'react';
import type { Node } from 'react';
import history from '../../history';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

type PropTypes = {
  to: string,
  onClick?: Object => void,
  children?: Node,
  className?: string,
};

const Link = ({ to, children, onClick, ...restProps }: PropTypes) => (
  <a
    href={to}
    {...restProps}
    onClick={(event: any) => {
      if (onClick) {
        onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      history.push(to);
    }}
  >
    {children}
  </a>
);

export default Link;
