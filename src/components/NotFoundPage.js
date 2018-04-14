import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h3>404 - <Link to="/">Go Home</Link></h3>
  </div>
);

export default NotFoundPage;
