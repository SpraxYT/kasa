import React from "react";
import { useParams, Navigate } from 'react-router-dom';
import Data from '../logements.json';

function Logement() {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const logement = Data.find(item => item.id === id);

    // Si le logement n'existe pas, rediriger vers la page 404
    if (!logement) {
        return <Navigate to="/404" />;
    }

    return (
        <div className="logement">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            {/* Autres détails du logement */}
        </div>
    );
}

export default Logement;
