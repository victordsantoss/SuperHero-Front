import React, { useEffect, useState } from 'react';
import { LinearProgress, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BiTrashAlt } from 'react-icons/bi';
import './index.css';

const Card = ({ appearance, biography, connections, id, name, images, powerstats, slug, work }) => {

    const [favorite, setFavorite] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [powerStatsArray, setPowerStatsArray] = useState([]);

    useEffect(() => {
        handlePoweStats();
    }, [id])

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

    return (
        <div className="card-container">
            <div className='card-data'>
                <section>
                    <div className="image-container-super-hero">
                        <img src={images.md} alt="Super Hero" className='image-super-hero' />
                    </div>
                    <div className="data-super-hero">
                        <p className='name-super-hero'>{name}</p>
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
                                    <div className='attributes-super-hero'>
                                        <span>{data.attribute}</span>
                                        <Container className='text-center'>
                                            <ThemeProvider theme={theme}>
                                                <LinearProgress variant="determinate" value={data.power} color="primary" style={{paddingRight: '0px !important'}}/>
                                            </ThemeProvider>
                                        </Container>
                                    </div>
                                )
                            })
                        }
                        <div className='buttons-super-hero'>
                            <BiTrashAlt color={favorite ? "red" : "#fff"} size={25} onClick={() => setFavorite(!favorite)} />
                            <MdOutlineFavoriteBorder color={deleted ? "red" : "#fff"} size={25} onClick={() => setDeleted(!deleted)} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Card;