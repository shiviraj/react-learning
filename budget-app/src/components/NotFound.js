import React from 'react';
import {Link} from 'react-router-dom';

const notFound = () => (
  <div>
    404!!<Link to="/">Go home</Link>
  </div>
);

export default notFound;
