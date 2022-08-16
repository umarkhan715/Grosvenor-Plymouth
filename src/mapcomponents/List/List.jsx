import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';


import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);
    return (


            <div className={classes.container} style={{
                height:'100px'
            }}>
                <Typography variant='h4'>
                    Restaurants & Attractions around Grosvenor
                </Typography>
                {isLoading ? (
                    <div className={classes.loading}>
                        <CircularProgress size='5rem' />
                    </div>
                ) : (
                    <React.Fragment>
                        <FormControl className={classes.formControl} style={{
                           margin:'10px'
                        }}>
                            <InputLabel>
                                Type
                            </InputLabel>
                            <Select value={type} onChange={(e) => setType(e.target.value)}>
                                <MenuItem value='restaurants'>
                                    Restaurants
                                </MenuItem>
                                <MenuItem value='attractions'>
                                    Attractions
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{
                           margin:'10px'
                        }}>
                            <InputLabel>
                                Rating
                            </InputLabel>
                            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                                <MenuItem value={0}>
                                    All
                                </MenuItem>
                                <MenuItem value={4}>
                                    Above 4.0
                                </MenuItem>
                                <MenuItem value={4.5}>
                                    Above 4.5
                                </MenuItem>
                                <MenuItem value={5}>
                                    Above 5
                                </MenuItem>
                            </Select>
                        </FormControl>
                        {places.length && <FormControl className={classes.formControl} style={{ minWidth: '175px' }}>
                            <InputLabel style={{
                                marginTop: '40px'
                            }}>
                                Displaying {places.length} result{places.length === 1 ? '' : 's'}
                            </InputLabel>
                        </FormControl>}
                        <Grid container spacing={3} className={classes.list} style={{
                            marginTop:'10px',
                            height:'72vh'
                        }}>
                            {places?.map((place, i) => (
                                <Grid ref={elRefs[i]} item key={i} xs={12}>
                                    <PlaceDetails
                                        place={place}
                                        selected={Number(childClicked) === i}
                                        refProp={elRefs[i]}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </React.Fragment>
                )}
            </div>
    );
};

export default List;