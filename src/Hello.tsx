import * as React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => (
  <section>
    <h2>Hi there</h2>
    <p>
      It is so nice to meet you.
    </p>
    <ul>
      <li><Link to='/good-bye'>Goodbye</Link></li>
      <li><Link to='/bad-route'>404</Link></li>
    </ul>
  </section>
);

export default Hello;
