import React, { useState, useEffect, useContext } from 'react';
import Card from '../../components/Card';
import { HeroContext } from '../../context/hero.context';
import "./index.css";

const Favorites = () => {

    const { favorites } = useContext(HeroContext);

    if (favorites.length > 0) {
        return (
            <div className="pt-5">
                <div className="row p-0 m-0">
                    <h1>Your favorites characters</h1>
                    {
                        favorites.map((favorite, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 card-list p-0 m-0" key={index}>
                                    <Card
                                        appearance={favorite.appearance}
                                        biography={favorite.biography}
                                        connections={favorite.connections}
                                        id={favorite.id}
                                        name={favorite.name}
                                        images={favorite.images}
                                        powerstats={favorite.powerstats}
                                        slug={favorite.slug}
                                        work={favorite.work}
                                        apelido={favorite.apelido && favorite.apelido}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="container pt-5">
                <div className="container-not-favorites">
                    <h1>You still don't have favorite characters</h1>
                </div>
                {console.log("-----", favorites)}
            </div>
        )
    }
}

export default Favorites;