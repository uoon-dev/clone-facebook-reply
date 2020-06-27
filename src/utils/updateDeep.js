const updateDeep = (obj, {id, key}, value) => {
  if (obj.id === id) {
    obj[key] = value;
  }
  if (obj && obj.children && obj.children.length > 0) {
    obj.children.forEach(child => {
      updateDeep(child, {id, key}, value);
    })
  }
}

export default updateDeep;