import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>
        <span>Oups! La page que</span>
        <br />
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="not-found__link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;
