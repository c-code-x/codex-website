import axios from "axios";
import { useState } from "react";

const YoutubeAPI = () => {
    const [subCount, setSubCount] = useState(0);
    axios
        .get(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.CHANNEL_ID}&key=${process.env.API_KEY}`
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
