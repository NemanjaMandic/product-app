import axios from "axios";

const defaultHeaders = {
  "content-type": "application/json",
  accept: "application/json",
};

class Network {
  service = {};

  constructor() {
    const service = axios.create();
    service.defaults.headers = defaultHeaders;
    this.service = service;
  }

  get(path) {
    return this.service
      .get(path)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  }

  // Other http methods here
}

export default new Network();
