// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const fetch = require('isomorphic-fetch');
const baseUrl = process.env.BASE_URL || 'http://localhost:8080/';

if (!baseUrl) {
  console.log(
    'No base URL found\nPlease set the BASE_URL environment variable'
  );
}

class Api {
  /*******************
    GENERAL HTTP METHODS
    ********************/

  // Hello world request
  async fetchHello(callback) {
    return await this.fetchJson(`${baseUrl}greeting`);
  }

  async fetchJson(path) {
    const result = await fetch(path, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (result.ok) {
      return await result.json();
    }

    const err = new Error(
      `unable to fetch ${path}. ${result.status} ${result.statusText}`
    );
    throw err;
  }
}

export default new Api();
