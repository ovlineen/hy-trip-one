import axios from "axios";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();

import { BASE_URL, TIMEOUT } from './config';

class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL: baseURL,
            timeout: timeout
        });
    }

    request(config) {
        mainStore.isLoding = true;
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                mainStore.isLoding = false;
                resolve(res.data);
            }).catch(err => {
                mainStore.isLoding = false;
                reject(err);
            });
        });
    }

    get(config) {
        return this.request({ ...config, method: "get" });
    }

    post(config) {
        return this.request({ ...config, method: "post" });
    }
}


export default new HYRequest(BASE_URL, TIMEOUT);