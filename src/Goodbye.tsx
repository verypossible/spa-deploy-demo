import * as React from 'react';
import { Link } from 'react-router-dom';

const Goodbye = () => (
  <section>
    <h2>So Long</h2>
    <p>
      I look forward to seeing you later.
    </p>
    <ul>
      <li><Link to='/'>Hello</Link></li>
      <li><Link to='/bad-route'>404</Link></li>
    </ul>
  </section>
);

export default Goodbye;
