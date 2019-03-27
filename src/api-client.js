// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const baseUrl = process.env.BASE_URL || 'http://localhost:8080';
import fetch from 'isomorphic-fetch';

if (!baseUrl) {
  console.log(
    'No base URL found\nPlease set the BASE_URL environment variable',
  );
}

const getNodeString = nodes => {
  let nodeString = nodes[0].toString();
  for (let i = 1; i < nodes.length; i++) {
    nodeString = nodeString.concat('-', nodes[i].toString());
  }
  return nodeString;
};

class Api {
  // Hello world request
  async fetchHello(callback) {
    return await this.fetchJson(`${baseUrl}/greeting`);
  }
  async fetchSensorData(callback) {
    return await this.fetchJson(`${baseUrl}/sensordata`);
  }

  async fetchSensorData(callback) {
    return await this.fetchJson(`${baseUrl}/sensordata`);
  }

  async fetchNodesForTimeInterval(nodes, startTime, endTime) {
    const str = `${baseUrl}/getData?nodeList=${getNodeString(
      nodes,
    )}&startTime=${startTime}&endTime=${endTime}`;
    return await this.fetchJson(str);
  }

  async fetchAllData(callback) {
    return await this.fetchJson(`${baseUrl}/getData`);
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
      `unable to fetch ${path}. ${result.status} ${result.statusText}`,
    );
    throw err;
  }
}

export default new Api();
