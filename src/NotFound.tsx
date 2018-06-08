import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section>
    <h2>Oops</h2>
    <p>
      We could not find that page.
    </p>
    <ul>
      <li><Link to='/'>Hello</Link></li>
      <li><Link to='/good-bye'>Goodbye</Link></li>
    </ul>
  </section>
);

export default NotFound;
