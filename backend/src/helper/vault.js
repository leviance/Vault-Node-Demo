const axios = require('axios');

class Vault {
    #appVersion
    #endpoint
    #vaultURL


    constructor(appVersion, endpoint) {
        this.#appVersion = appVersion || "v1";
        this.#endpoint = endpoint || "http://127.0.0.1:8200";
        this.#vaultURL = `${this.#endpoint}/${this.#appVersion}`;
    }
    
    async tokenLookUp(token) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.#vaultURL}/auth/token/lookup-self`, { headers: {"X-Vault-Token": token}})
                .then(res => {
                    return resolve(res.data);
                })
                .catch(err => {
                    return reject(err.response);
                })
        })
    }

    async enableAppRole(token, path) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.#vaultURL}/sys/auth/${path}`, {type: "approle"}, { headers: {"X-Vault-Token": token}})
                .then(res => {
                    return resolve(res.data);
                })
                .catch(err => {
                    return reject(err.response);
                })
        })
    }

    async getAuthMethods(token) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.#vaultURL}/sys/auth`, { headers: {"X-Vault-Token": token}})
                .then(res => {
                    return resolve(res.data);
                })
                .catch(err => {
                    return reject(err.response);
                })
        })
    }

    async disableAuthMethod(token, path) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.#vaultURL}/sys/auth/${path}`, { headers: {"X-Vault-Token": token}})
                .then(res => {
                    return resolve(res.data);
                })
                .catch(err => {
                    return reject(err.response);
                })
        })
    }

    async createSecret(token, path) {
        return new Promise((resolve, reject) => {
            axios.put(
                    `http://localhost:8200/v1/database/data/backend/lee`, 
                    {data: {bar: "b", foo: "a", t: "123"}}, 
                    { headers: {"X-Vault-Token": "root"}}
                )
                .then(res => {
                    return resolve(res.data);
                })
                .catch(err => {
                    return reject(err.response);
                })
        })
    }

    async updateSecret(token, path) {
        return this.createSecret(token, path);
    }
}


module.exports = new Vault;
