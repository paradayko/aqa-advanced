import axios from "axios";
export default class restClient {
  #axiosInstance;
  constructor(baseUrl, otherConfigs) {
    this.baseUrl = baseUrl;
    this.#axiosInstance = axios.create({
      baseURL: this.baseUrl,
      validateStatus: () => true,
      ...otherConfigs,
    });
  }

  async #sendRequest(url, method, data, params, headers) {
    return this.#axiosInstance.request({ url, method, data, params, headers });
  }

  async sendGet(url, params, headers) {
    return this.#sendRequest(url, "GET", params, headers);
  }
  async sendPost(url, data, headers) {
    return this.#sendRequest(url, "POST", data, headers);
  }
  async sendPut(url, data, headers) {
    return this.#sendRequest(url, "PUT", data, headers);
  }
  async sendPatch(url, data, headers) {
    return this.#sendRequest(url, "PATCH", data, headers);
  }
  async sendDelete(url, data, params, headers) {
    return this.#sendRequest(url, "DELETE", data, params, headers);
  }
}
