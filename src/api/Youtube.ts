import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

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
