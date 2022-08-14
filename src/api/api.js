import axios from "axios";

export default class Api {
    constructor() {
    }

    request(method, config) {
        return axios({
            timeout: 5000,
            url: method,
            headers: { "Cache-Control": "no-cache" },
            ...config
        }).then(result => result.data)
            .catch(result => {
                console.log(result)
            });
    }

    exampleApi = data => {
        return this.request("https://reqres.in/api/products", {
            method: "GET",
            params: {}
        })
    }
}
