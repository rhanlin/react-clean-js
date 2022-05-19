import HttpInfrastructure from "../common/HttpInfrastructure";
import StorageInfrastructure from "../common/StorageInfrastructure";

function createInfrastructures() {
  return {
    storage: new StorageInfrastructure(window.localStorage),
    http: HttpInfrastructure.getInstance()
  };
}

export default createInfrastructures;
