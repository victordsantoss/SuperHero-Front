import React, { useEffect, useState, useContext } from 'react';
import { LinearProgress, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiFillEdit } from "react-icons/ai";
import { BiTrashAlt } from 'react-icons/bi';
import { HeroContext } from '../../context/hero.context';
import './index.css';

const Card = ({ appearance, biography, connections, id, name, images, powerstats, slug, work, apelido }) => {

    const [favorite, setFavorite] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [powerStatsArray, setPowerStatsArray] = useState([]);
    const [edit, setEdit] = useState(false);
    const [newSurname, setNewSurname] = useState("");
    const { setFavorites, favorites } = useContext(HeroContext);
    let currentFavorite = {}

    useEffect(() => {
        handlePoweStats();
    }, [])

    const theme = createTheme({
        palette: {
            primary: {
                main: '#11cb5f',
            },
        },
    });

    const handlePoweStats = () => {
        const keys = Object.keys(powerstats);
        const values = Object.values(powerstats);
        const AuxPowerStatsArray = [];
        let powerStatsObject = {
            attribute: null,
            power: null
        };

        for (let index = 0; index < keys.length; index++) {
            powerStatsObject.attribute = keys[index];
            powerStatsObject.power = values[index];
            AuxPowerStatsArray.push(powerStatsObject);
            powerStatsObject = {}
        }

        setPowerStatsArray(AuxPowerStatsArray);
    }

    const handleAddingFavorite = () => {
        formatFavorite();
        setFavorites([...favorites, currentFavorite]);
        setFavorite(!favorite)
        currentFavorite = {}
    }

    const handleSearchingFavorite = (e) => {
        e.preventDefault();
        setEdit(true);
        let current = favorites.find((favorite) => favorite.id === id);
        let new_favorites = favorites.filter((favorite) => favorite.id !== id);
        current.apelido = newSurname;
        new_favorites.push(current);
        setFavorites(new_favorites);
        setEdit(false);
        setNewSurname("");
    }

    const handleDeletingFavorite = () => {
        let new_favorites = favorites.filter((favorite) => favorite.id !== id);
        setFavorites(new_favorites);
    }

    const formatFavorite = () => {
        currentFavorite.appearance = appearance;
        currentFavorite.biography = biography;
        currentFavorite.connections = connections;
        currentFavorite.id = id;
        currentFavorite.name = name;
        currentFavorite.images = images;
        currentFavorite.powerstats = powerstats;
        currentFavorite.slug = slug;
        currentFavorite.work = work
    }

    return (
        <div className="card-container">
            <div className='card-data'>
                <section className={!window.location.href.includes("favorites") && window.screen.width > 700 ? "full-card" : null}>
                    <div className="image-container-super-hero">
                        <img src={images.md} alt="Super Hero" className='image-super-hero' />
                    </div>
                    <div className="data-super-hero">
                        <p className='name-super-hero'>{name}
                            {apelido ?
                                <p className="surname-super-hero"> ({apelido})</p>
                                : edit && <form onSubmit={(e) => handleSearchingFavorite(e)}>
                                    <input type="text" placeholder="Adding Surname ..." className="edit-surname" onChange={(event) => setNewSurname(event.target.value)} value={newSurname} />
                                </form>
                            }
                        </p>
                        <div className='attributes-super-hero'>
                            <span>Gender</span>
                            <span>{appearance.gender}</span>
                        </div>
                        <div className='attributes-super-hero'>
                            <span>Race</span>
                            <span>{appearance.race}</span>
                        </div>
                        <div className='attributes-super-hero'>
                            <span>Height</span>
                            <span>{appearance.height[1]}</span>
                        </div>
                        <div className='attributes-super-hero'>
                            <span>Weight</span>
                            <span>{appearance.weight[1]}</span>
                        </div>
                        {
                            powerStatsArray.map((data, index) => {
                                return (
                                    <div className='attributes-super-hero' key={index}>
                                        <span>{data.attribute}</span>
                                        <Container className='text-center'>
                                            <ThemeProvider theme={theme}>
                                                <LinearProgress variant="determinate" value={data.power} color="primary" style={{ paddingRight: '0px !important' }} />
                                            </ThemeProvider>
                                        </Container>
                                    </div>
                                )
                            })
                        }
                        <div className='buttons-super-hero'>
                            <BiTrashAlt color={deleted ? "red" : "#fff"} size={25} onClick={() => handleDeletingFavorite()} />
                            {!window.location.href.includes("favorites") && <MdOutlineFavoriteBorder color={favorite ? "red" : "#fff"} size={25} onClick={() => handleAddingFavorite(name)} />} 
                            {window.location.href.includes("favorites") && <AiFillEdit size={25} onClick={() => setEdit(true)} />}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Card;