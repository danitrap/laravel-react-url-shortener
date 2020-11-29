import axios from "axios";

export default {
    shortenUrl(url) {
        return axios.post("/api/shorten", { url });
    }
};
