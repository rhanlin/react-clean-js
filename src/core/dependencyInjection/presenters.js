import ErrorPresenter from "../common/ErrorPresenter";

function createPresenters() {
  const errorPresenter = new ErrorPresenter();
  // const paginationPresenter = new PaginationPresenter()

  return {
    error: errorPresenter
    // pagination: paginationPresenter
  };
}
export default createPresenters;
