import React from "react";
import { useParams, Navigate } from 'react-router-dom';
import Data from '../logements.json';
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Logement() {
    const { id } = useParams();
    const logement = Data.find(item => item.id === id);

    if (!logement) {
        return <Navigate to="/404" />;
    }

    return (
        <div className="logement">
            <Slideshow pictures={logement.pictures}/>
            <div className="logement__content">
                <div className="logement__left">
                    <div className="logement__informations">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <div className="logement__tags">
                            {logement.tags.map((tag, index) => (
                                <Tag key={index} text={tag} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="logement__right">
                    <div className="logement__host">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <Rating rating={parseInt(logement.rating)} />
                </div>
            </div>
            <div className="logement__details">
                <Collapse title="Description" content={logement.description} />
                <Collapse 
                    title="Équipements" 
                    content={
                        <ul className="logement__equipments">
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    } 
                />
            </div>
        </div>
    );
}

export default Logement;
