import React, { useState, useEffect, useContext } from 'react';
import { HeroContext } from '../../context/hero.context';
import Card from "../../components/Card";
import "./index.css";

const Details = () => {

    const { currentHero } = useContext(HeroContext);

    useEffect(() => {
        fetchHero();
    }, []);

    const fetchHero = () => {
        console.log("current Hero", currentHero);
    }

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-4">
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
                </div>
                <div className="col-8 text-center">
                    <h1 className="informations-title">Informations</h1>
                </div>
            </div>

            {console.log("aaaaa", currentHero)}
        </div>
    )
}

export default Details;