import infrastructures from "./dependencyInjection/infrastructures";
import repositories from "./dependencyInjection/repositories";
import useCases from "./dependencyInjection/useCases";
import presenters from "./dependencyInjection/presenters";
import controllers from "./dependencyInjection/controllers";

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cPresenter = presenters();
// eslint-disable-next-line react-hooks/rules-of-hooks
const cUseCases = useCases(cRepositories, cPresenter);
const cController = controllers(cUseCases);

const core = {
  profile: cController.profile
};

export default core;
