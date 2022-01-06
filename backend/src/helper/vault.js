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
    

    /**
     * @param {String} token 
     * @returns {object}
     */
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


    /**
     * @param {String} token 
     * @param {String} path 
     * @returns {Object}
     */
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


    /**
     * @param {String} token 
     * @returns {Object}
     */
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
}


module.exports = new Vault;
