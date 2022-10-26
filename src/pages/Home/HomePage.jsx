import React, { useState, useEffect, useContext } from 'react';
import { TbListDetails } from "react-icons/tb";
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { HeroContext } from '../../context/hero.context';
import { GetAll, GetHeroById } from '../../services/heroes.service';
import DetailsModal from '../../components/DetailsModal/DetailsModal';

import "./index.css";

const Home = () => {

    const [heroes, setHeroes] = useState([]);
    const { setCurrentHero, currentHero } = useContext(HeroContext);
    const [sortHeroes, setSortHeroes] = useState({ id: false, powerStats: false });
    const [searchParams, setSearchParams] = useState("");
    const [openModal, setOpenModal] = useState(false);
    let navigate = useNavigate();
    let displayHeroes;

    useEffect(() => {
        handleAllHeroes();
    }, []);

    useEffect(() => {
        handleTotalValues();
    }, [displayHeroes && displayHeroes]);

    const handleAllHeroes = async () => {
        const res = await GetAll();
        setHeroes(res.data);
    }

    displayHeroes = heroes.filter((hero) =>
        hero.name.toLocaleLowerCase().includes(searchParams.toLocaleLowerCase())
    )

    const handleTotalValues = () => {
        return displayHeroes && displayHeroes.length;
    }

    const handlePowerStats = (powerStats) => {
        const values = Object.values(powerStats);
        let soma = values.reduce(function (soma, i) {
            return soma + i;
        });
        return soma;
    }

    const sortHeroesById = () => {
        const h = heroes.sort(function (a, b) {
            if (a.id > b.id) return 1
            if (a.id < b.id) return -1
            return 0;
        });

        if (sortHeroes.id) {
            setHeroes(h);
            setSortHeroes({ id: false });
        } else {
            setHeroes(h.reverse());
            setSortHeroes({ id: true });
        }
    }

    const sortHerosByPowerStats = () => {
        const h = heroes.sort(function (a, b) {
            if (!(a.powerstats)) return -1;
            if (handlePowerStats(a.powerstats) > handlePowerStats(b.powerstats)) return 1
            if (handlePowerStats(a.powerstats) < handlePowerStats(b.powerstats)) return -1
            return 0;
        });

        if (sortHeroes.powerStats) {
            setHeroes(h);
            setSortHeroes({ powerStats: false });
        } else {
            setHeroes(h.reverse());
            setSortHeroes({ powerStats: true });
        }
    }

    const handleDetails = (hero) => {
        setCurrentHero(hero);
        setOpenModal(true);
    }


    return (
        <div className="container pt-3">
            <div className="main-home">
                <div className="header-home">
                    <div className="row center horizontal-padding">
                        <div className="col-md-6  search-area">
                            <span className="search-number">
                                {handleTotalValues()}
                            </span>
                            <span className="search-title">
                                results
                            </span>
                        </div>
                        <div className="col-md-6  ">
                            <input type="text" className="search-input" placeholder="Search ..." onChange={(event) => setSearchParams(event.target.value)} value={searchParams} />
                        </div>
                        {console.log(searchParams)}
                    </div>
                </div>

                <div className={window.screen.width < 800 ? "body-home scroll-intern mt-2" : "body-home"}>
                    <div className="horizontal-padding pt-4">
                        <div className="row header-body">
                            <div className="col-1 text-center">
                                Id {sortHeroes.id ? <AiOutlineCaretDown onClick={() => sortHeroesById()} size={18} /> :
                                    <AiOutlineCaretUp onClick={() => sortHeroesById()} size={18} />
                                }
                            </div>
                            <div className="col-2 text-center">
                                Name
                            </div>
                            <div className="col-2 text-center">
                                Race
                            </div>
                            <div className="col-2 text-center">
                                First Appearance
                            </div>
                            <div className="col-2 text-center">
                                PowerStats {sortHeroes.powerStats ? <AiOutlineCaretDown onClick={() => sortHerosByPowerStats()} size={18} /> :
                                    <AiOutlineCaretUp onClick={() => sortHerosByPowerStats()} size={18} />
                                }
                            </div>
                            <div className="col-2 text-center">
                                Publisher
                            </div>
                            <div className="col-1 text-center">
                                Inspect
                            </div>
                        </div>
                    </div>
                    <div className="body-data horizontal-padding pt-0">
                        {
                            heroes && displayHeroes.map((hero, index) => {
                                return (
                                    <div className="row line" key={index} style={index % 2 ? { backgroundColor: "#303347", color: "#fff" } : { backgroundColor: "#eaeaea" }}>
                                        <div className="col-1 text-center">
                                            {hero.id}
                                        </div>
                                        <div className="col-2 text-center">
                                            {hero.name}
                                        </div>
                                        <div className="col-2 text-center">
                                            {hero.appearance.race}
                                        </div>
                                        <div className="col-2 text-center">
                                            {hero.biography.firstAppearance}
                                        </div>
                                        <div className="col-2 text-center">
                                            {handlePowerStats(hero.powerstats)}
                                        </div>
                                        <div className="col-2 text-center">
                                            {hero.biography.publisher}
                                        </div>
                                        <div className="col-1 text-center detail-icon">
                                            <TbListDetails size={30} color="red" onClick={() => handleDetails(hero)} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {
                openModal && <DetailsModal currentHero={currentHero} onClose={() => setOpenModal(false)} visible={openModal} />
            }
        </div >
    );

}

export default Home;