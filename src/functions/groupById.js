const groupById = (list) => {
  const result = list.reduce(function (r, a) {
    r[a.id] = r[a.id] || [];
    r[a.id].push(a);
    return r;
  }, Object.create(null));

  
  return Object.keys(result).map((key) => ({id : key, data : result[key]}))
}

export default groupById