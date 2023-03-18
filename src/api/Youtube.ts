import axios from "axios";
import { useState } from "react";

const API_KEY = "AIzaSyB-uogOt-bfMGJPUk54cwwym-BZjLj_YCA";
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
