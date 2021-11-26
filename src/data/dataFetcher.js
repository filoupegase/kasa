import {
  PropertyApartment,
  PropertyAdvertisementsList
} from "./propertyApartment";


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

    if (response.ok) {
      let data = await response.json();

      const appartementInstances = [];

      for (let appartement of data) {
        const appartementInstance = new PropertyApartment(
          appartement.id,
          appartement.title,
          appartement.cover,
          appartement.pictures,
          appartement.description,
          appartement.host,
          appartement.rating,
          appartement.location,
          appartement.equipments,
          appartement.tags
        );
        appartementInstances.push(appartementInstance);
      }

      return new PropertyAdvertisementsList(appartementInstances);

    } else {
      const messageError = `Oups ! Une erreur s'est produite.\\n\\nHTTP-Error-${response.status} while fetching ${this._dataSource}`;

      window.alert(messageError);
    }
  }
}