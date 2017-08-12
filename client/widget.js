import React from 'react';
import PropTypes from 'prop-types';

export default function Widget({ children }) {
  if (!children) return null;

  return (
    <div>
      {children}
    </div>
  );
};

Widget.PropTypes = {
  children: PropTypes.node.isRequired,
};
