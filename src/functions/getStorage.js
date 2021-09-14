export function getStorage() {
  let items = {};
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    items[key] = localStorage.getItem(key);
  }
  return items;
}
