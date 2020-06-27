const rejectDeep = (obj, parent, id, i) => {
  if (obj.id === id) {
    parent.splice(i, 1);
  }
  if (obj && obj.children && obj.children.length > 0) {
    obj.children.forEach((child, j) => {
      rejectDeep(child, obj.children, id, j);
    })
  }
}

export default rejectDeep;