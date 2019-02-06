// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const fetch = require("isomorphic-fetch");
const baseUrl = process.env.BASE_URL;

if (!baseUrl) {
  console.log(
    "No base URL found\nPlease set the BASE_URL environment variable"
  );
}

class Api {
  /*******************
    GENERAL HTTP METHODS
    ********************/

  async fetchHello() {
    return this.fetchJson(`${baseUrl}hello`);
  }

  async updateJson(path, object) {
    const authHeader = this.getAuthHeader();
    const result = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json"
      }
    });

    return result;
  }

  async fetchJson(path) {
    const authHeader = this.getAuthHeader();

    const result = await fetch(path, {
      method: "GET",
      headers: {
        Authorization: authHeader
      }
    });

    return result;
  }

  async deleteJson(path) {
    const authHeader = this.getAuthHeader();
    return await fetch(path, {
      method: "DELETE",
      headers: {
        Authorization: authHeader
      }
    })
      .then(response => {
        console.log("request succeeded with JSON response: ", response);
        return response;
      })
      .catch(err => {
        console.log("request failed: ", err);
        return err;
      });
  }
}

export default new Api();
