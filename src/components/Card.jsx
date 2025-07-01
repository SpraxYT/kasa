import React from "react"
import { Link } from 'react-router-dom';

function Card({ id, src, title }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={src} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
}

export default Card;