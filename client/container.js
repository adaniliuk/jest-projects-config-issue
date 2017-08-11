import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ header, children }) {
  if (!(header && children)) return null;

  return (
    <main>
      <h1>{header}</h1>
      <section>
        {children}
      </section>
    </main>
  );   
};

Container.PropTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};