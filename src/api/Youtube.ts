import axios from "axios";
import { useState } from "react";

const API_KEY = "AIzaSyCZ8NqbINKEl2MxYOx1rot5AqGtwzj2jJ4";
const CHANNEL_ID = "UCZ9sd4Lj85osgKLdEO9Fi7w";

const YoutubeAPI = () => {
    const [subCount, setSubCount] = useState(0);
    axios
        .get(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        )
        .then((response) => {
            setSubCount(response.data.items[0].statistics.subscriberCount);
        })
        .catch((error) => {
            setSubCount(50);
        });
    return subCount;
};
export default YoutubeAPI;
