import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'c4ccada90amsh8276f0caee07272p135428jsnbd63c2a912f1'
            }
        });
        return data?.filter((place) => (place.name && place.num_reviews > 0));
    }
    catch (error) {
        console.error(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather'    , {
            params: {
                lat: lat,
                lon: lng
            },
            headers: {
                'x-rapidapi-host': 'open-weather-map27.p.rapidapi.com',
                'x-rapidapi-key': 'c4ccada90amsh8276f0caee07272p135428jsnbd63c2a912f1'
            }
        });
        return data;
    }
    catch (error) {
        console.error(error);
    }
};