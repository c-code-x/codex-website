import axios from "axios";
import { useState } from "react";

const DiscordAPI = () => {
    const [subCount, setSubCount] = useState(0);
    axios
        .get(
            `https://discord.com/api/v10/invites/${process.env.INVITE_CODE}?with_counts=true`
        )
        .then((response) => {
            setSubCount(response.data.items[0].statistics.subscriberCount);
        })
        .catch((error) => {
            setSubCount(50);
        });
    return subCount;
};
export default DiscordAPI;
