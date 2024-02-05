export const localStorageName: any = "store";

const getFromLocalStorage: any = (key: string) => {
  const storedData = window.localStorage.getItem(localStorageName);
  if (storedData === null) {
    return undefined; // or handle the case when the item is not found in localStorage
  }
  const store = JSON.parse(storedData) || {};
  return store[key];
};

const setToLocalStorage: any = (key: string, storageValue: any) => {
  const storedData = window.localStorage.getItem(localStorageName);
  const store = storedData ? JSON.parse(storedData) : {};
  const updatedStore = JSON.stringify({ ...store, [key]: storageValue });
  window.localStorage.setItem(localStorageName, updatedStore);
};

class CustomStorage {
  private storage: Storage | null;
  private now: number;

  constructor(type: "session" | "local") {
    this.storage =
      type === "session" ? window.sessionStorage : window.localStorage;
    this.now = new Date().getTime();
  }

  save(
    key: string,
    val: any,
    length: number | null = null,
    time: number | null = null
  ) {
    if (length || time) {
      let tsKey = `${key}:ts`;
      try {
        let duration = time ? time : this.now + (length as number) * 1000;
        setToLocalStorage(tsKey, duration);
      } catch (e) {
        return false;
      }
    }

    let storageValue =
      typeof val === "string" || typeof val === "number"
        ? val
        : JSON.stringify(val);

    return setToLocalStorage(key, storageValue);
  }

  get(key: string) {
    let tsKey = `${key}:ts`;
    let timestamp = parseInt(getFromLocalStorage(tsKey));
    if (timestamp && timestamp < this.now) {
      this.storage?.removeItem(key);
      this.storage?.removeItem(tsKey);
      return false;
    }

    let item = getFromLocalStorage(key);
    if (!item) return;

    try {
      item = JSON.parse(item);
    } catch (e) {
      return e;
    }

    return item;
  }

  remove(key: string) {
    let tsKey = `${key}:ts`;
    this.storage?.removeItem(tsKey);
    this.storage?.removeItem(key);
  }

  clear() {
    this.storage?.clear();
  }
}

export default CustomStorage;

export const $storage: any = new CustomStorage("local");
