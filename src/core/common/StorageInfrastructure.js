class Storage {
  constructor(storage) {
    this.storage = storage;
  }

  get(name) {
    return new Promise(resolve => {
      resolve(this.storage.getItem(name));
    });
  }

  set(name, value) {
    this.storage.setItem(name, value);
  }

  remove(name) {
    this.storage.removeItem(name);
  }
}

export default Storage;
