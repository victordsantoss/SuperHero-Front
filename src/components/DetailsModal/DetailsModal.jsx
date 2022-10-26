import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../Card";
import "./index.css";

const DetailsModal = ({ currentHero, visible, onClose }) => {

    return (
        <div>
            <div className="modalDetail">
                <div onClick={onClose} className="overlayDetail"></div>
                <div className="modal-contentDetail">
                    <Card
                        appearance={currentHero.appearance}
                        biography={currentHero.biography}
                        connections={currentHero.connections}
                        id={currentHero.id}
                        name={currentHero.name}
                        images={currentHero.images}
                        powerstats={currentHero.powerstats}
                        slug={currentHero.slug}
                        work={currentHero.work}
                    />
                    <button className="close-modalDetail" onClick={onClose}><AiOutlineClose /></button>
                </div>
            </div>
        </div>
    );
}

export default DetailsModal;