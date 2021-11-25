export class DataFetcher {
  /**
   * @constructs
   * @param {string} dataSource
   */
  constructor(dataSource) {
    this._dataSource = dataSource;
  }

  /**
   * Fetch the data and return the contents as a PropertyAdvertisementsList if the fetching is ok.
   * @returns {PropertyAdvertisementsList}
   */

  async fetchSource() {
    let response = await fetch(this._dataSource);


  }
}