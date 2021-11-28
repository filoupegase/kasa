import {
  PropertyApartment,
  PropertyApartmentList
} from "./propertyApartment";


export class DataFetcher {
  constructor(dataSource) {
    this._dataSource = dataSource;
  }

  /**
   * Fetch the data and return the contents as a PropertyAdvertisementsList if the fetching is ok.
   * @returns {PropertyApartmentList}
   */
  async fetchSource() {
    let response = await fetch(this._dataSource, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      let data = await response.json();

      const advertisementInstances = [];

      for (let advertisement of data) {
        const advertisementInstance = new PropertyApartment(
          advertisement.id,
          advertisement.title,
          advertisement.cover,
          advertisement.pictures,
          advertisement.description,
          advertisement.host,
          advertisement.rating,
          advertisement.location,
          advertisement.equipments,
          advertisement.tags
        );

        advertisementInstances.push(advertisementInstance);
      }

      return new PropertyApartmentList(advertisementInstances);
    } else {
      const message = `Oups ! Une erreur s'est produite.\n\nHTTP-Error-${response.status} while fetching ${this._dataSource}`;

      window.alert(message);
    }
  }
}
