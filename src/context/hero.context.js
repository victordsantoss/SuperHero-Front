import React, { useState } from 'react';
import { createContext } from 'react';

export const HeroContext = createContext();

export function HeroContextProvider({ children }) {

    const [currentHero, setCurrentHero] = useState();
    const [favorites, setFavorites] = useState([]);

    return (
        <HeroContext.Provider value={{ currentHero, setCurrentHero }}>
            {children}
        </HeroContext.Provider>
    )
}
