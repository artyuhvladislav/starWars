const sortByFieldString = (prop, flag) => (a, b) => {
  if (flag) {
    return a[prop].toLowerCase() > b[prop].toLowerCase() ? 1 : -1;
  }
  return a[prop].toLowerCase() < b[prop].toLowerCase() ? 1 : -1;
};

const sortByFieldObject = (prop, flag) => (a, b) => {
  if (flag) {
    return a[prop].name.toLowerCase() > b[prop].name.toLowerCase() ? 1 : -1;
  }
  return a[prop].name.toLowerCase() < b[prop].name.toLowerCase() ? 1 : -1;
};

const sortByFieldArrLength = (prop, flag) => (a, b) => {
  if (flag) {
    debugger;
    return (
      a[prop.vehicles].length +
      a[prop.starships].length -
      (b[prop.vehicles].length + b[prop.starships].length)
    );
  }
  return (
    b[prop.starships].length +
    b[prop.vehicles].length -
    (a[prop.vehicles].length + a[prop.starships].length)
  );
};

export const sortTableData = (sortObj, data) => {
  const { id, flag, prop } = sortObj;
  const dataCopy = [...data];

  switch (id) {
    case 0: {
      return dataCopy.sort(sortByFieldString(prop, flag));
    }

    case 1: {
      const modifiedData = dataCopy.map((item) => {
        return {
          ...item,
          sortValue: item[prop] === 'unknown' ? -1 : parseInt(item[prop]),
          value: item[prop],
        };
      });

      if (flag) {
        return modifiedData
          .sort((a, b) => a.sortValue - b.sortValue)
          .map((item) => {
            const obj = item;
            delete obj.sortValue;
            delete obj.value;

            return obj;
          });
      }
      return modifiedData
        .sort((a, b) => b.sortValue - a.sortValue)
        .map((item) => {
          const obj = item;
          delete obj.sortValue;
          delete obj.value;

          return obj;
        });
    }

    case 2: {
      return dataCopy.sort(sortByFieldObject(prop, flag));
    }

    case 3: {
      return dataCopy.sort(sortByFieldArrLength(prop, flag));
    }

    default: {
      return dataCopy;
    }
  }
};
