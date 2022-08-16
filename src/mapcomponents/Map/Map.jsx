import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Polygon, Marker } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from './styles';
import mapStyles from './mapStyles';



const handleApiLoaded = (map, maps) => {
    const triangleCoords = [
        { lat: 50.3968723541529, lng: -4.209515145967979 },
        { lat: 50.4010304471667, lng: -4.206081918428916 },
        { lat: 50.41722164856917, lng: -4.1995587861046975 },
        { lat: 50.42487772208941, lng: -4.196125558565635 },
        { lat: 50.430126885830234, lng: -4.1926923310265725 },
        { lat: 50.43185688741059, lng: -4.187885812471885 },
        { lat: 50.430763399571134, lng: -4.177242807100791 },
        { lat: 50.433387727958305, lng: -4.166943124483604 },
        { lat: 50.436230586225314, lng: -4.15904670114376 },
        { lat: 50.4384172841094, lng: -4.147717050264854 },
        { lat: 50.43835168397531, lng: -4.129143276705671 },
        { lat: 50.4375863501456, lng: -4.1190152554654365 },
        { lat: 50.44512981487576, lng: -4.112320461764265 },
        { lat: 50.44523913161313, lng: -4.105797329440046 },
        { lat: 50.441412895553235, lng: -4.101334133639265 },
        { lat: 50.43857034851099, lng: -4.103222408785749 },
        { lat: 50.44010097197712, lng: -4.096184292330671 },
        { lat: 50.43780501821676, lng: -4.095497646822858 },
        { lat: 50.4367116677595, lng: -4.090347805514265 },
        { lat: 50.43397818113114, lng: -4.08571294833653 },
        { lat: 50.430151034682375, lng: -4.088287868990827 },
        { lat: 50.42719845318267, lng: -4.089489498629499 },
        { lat: 50.42610485775701, lng: -4.082623043551374 },
        { lat: 50.423063164346715, lng: -4.078615828521814 },
        { lat: 50.4204382636991, lng: -4.077242537506189 },
        { lat: 50.41956326448847, lng: -4.063852950103845 },
        { lat: 50.41759445716402, lng: -4.05698649502572 },
        { lat: 50.41059359059521, lng: -4.05698649502572 },
        { lat: 50.408666806409016, lng: -4.03375320577741 },
        { lat: 50.40429056149178, lng: -4.029976655484441 },
        { lat: 50.39474894870793, lng: -4.0226295401689445 },
        { lat: 50.38982419887788, lng: -4.014218132698241 },
        { lat: 50.38262083277293, lng: -4.014502452092509 },
        { lat: 50.375395843698776, lng: -4.015875743108134 },
        { lat: 50.37254933372723, lng: -4.024115489201884 },
        { lat: 50.371673450145686, lng: -4.042654917912822 },
        { lat: 50.371673450145686, lng: -4.050208018498759 },
        { lat: 50.367512782318954, lng: -4.049521372990947 },
        { lat: 50.367029626160054, lng: -4.044209535687495 },
        { lat: 50.3628685511377, lng: -4.0383730488710885 },
        { lat: 50.35079937235899, lng: -4.062645971763212 },
        { lat: 50.34665741560342, lng: -4.090739434223886 },
        { lat: 50.34841009003954, lng: -4.110308831196543 },
        { lat: 50.347095590276915, lng: -4.115458672505136 },
        { lat: 50.3497245534155, lng: -4.141551201802011 },
        { lat: 50.356077280125504, lng: -4.159747307759043 },
        { lat: 50.36199112367043, lng: -4.187556450825449 },
        { lat: 50.36965612060407, lng: -4.192706292134043 },
        { lat: 50.37950929759354, lng: -4.193869802509229 },
        { lat: 50.38957931902865, lng: -4.196959707294385 },
        { lat: 50.39658329026279, lng: -4.208632680927198 },
        { lat: 50.40096024686387, lng: -4.207946035419385 },
        { lat: 50.3968723541529, lng: -4.209515145967979 }
    ];

    var bermudaTriangle = new maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
}

const PLYMOUTH_BOUNDS = {
    north: -34.36,
    south: -47.35,
    west: 166.28,
    east: -175.81,
  };



const center = {
    lat: 50.389209,
    lng: -4.096777
};



const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');

    return (
        <div className={classes.mapContainer}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD6l5bH_gXHS6Qjxk4MdS_bDaqicwzI_uE' }}
                defaultCenter={center}
                center={center}
                defaultZoom={12.5}
                scrollWheelZoom={false}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoordinates({ lat: 50.376289, lng: -4.143841 });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => {
                    setChildClicked(child)
                }}
                yesIWantToUseGoogleMapApiInternals //this is important!
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {/* <Marker position={{ lat: 50.376289, lng: -4.143841 }} /> */}

                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color='primary' fontSize='large' />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place?.photo?.images?.large?.url ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
                {weatherData?.list?.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img height='100px' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt={data.weather[0].icon} />
                    </div>
                ))}
                {/* <Polygon
                    path={reversedCoords}
                    options={{
                        fillColor: "#000",
                        fillOpacity: 1,
                        strokeColor: "#000",
                        strokeOpacity: 1,
                        strokeWeight: 1
                    }} /> */}
            </GoogleMapReact>

        </div>
    );

};

export default Map;