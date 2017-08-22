/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import Simple from './Simple';


export default function App() {
  console.log(Simple);
  console.log(<Simple />);
  return (
    <div>
      <div>
        This is very simple div.
      </div>
      <Simple />
    </div>
  );
}
