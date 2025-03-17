import restClient from "./restClient";

export default class objectConfig extends restClient {
  constructor(baseUrl, otherConfigs) {
    super(baseUrl, otherConfigs);
    this.url = "/objects";
  }

  /**
   * Get a full list of Objects
   */
  async getObjList(headers) {
    return this.sendGet(this.url, headers);
  }

  /**
   * Get list of object by IDs
   */
  async getObjListByIds(objId, headers) {
    return this.sendGet(`${this.url}/${objId}`, headers);
  }

  /**
   * Get object by ID
   */
  async getObj(objId, headers) {
    return this.sendGet(`${this.url}/${objId}`, headers);
  }

  /**
   * Add Object to the list
   * @param {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}
   */
  async addObj(payload, headers) {
    return this.sendPost(this.url, payload, headers);
  }

  /**
   * Update oblect by ID
   * @param {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 2049.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "silver"
   }
}
   */
  async putUpdateObj(objId, payload, headers) {
    return this.sendPut(`${this.url}/${objId}`, payload, headers);
  }

  /**
   * Update oblect by ID
   * @param {
   "name": "Apple MacBook Pro 16 (Updated Name)"
}
   */
  async patchUpdateObj(objId, payload, headers) {
    return this.sendPatch(`${this.url}/${objId}`, payload, headers);
  }

  /**
   * Delete object by ID
   */
  async deleteObj(objId, headers) {
    return this.sendDelete(`${this.url}/${objId}`, headers);
  }
}
