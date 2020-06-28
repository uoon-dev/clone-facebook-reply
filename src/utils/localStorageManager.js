export default {
  load(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      this.clear(key);
    }
  },
  clear(key) {
    localStorage.removeItem(key);
  },
};